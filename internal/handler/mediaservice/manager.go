package mediaservice

import (
	"bytes"
	"context"
	"encoding/binary"
	"errors"
	"fmt"
	"image"
	"math/rand"
	"time"

	_ "image/gif"
	_ "image/jpeg"
	_ "image/png"

	"adfy.io/internal/entity"
	"adfy.io/internal/factory"
	"adfy.io/internal/repository"
	"adfy.io/pkg/db"
	"github.com/h2non/filetype"

	pkgctx "adfy.io/pkg/ctx"
)

const MEDIA_PREFIX = "/media"

type MediaManager struct {
	authContext     *pkgctx.AuthContext
	orm             *db.Orm
	mediaUploader   *MediaUploader
	helper          *Helper
	mediaRepository *repository.MediaRepository
	mediaFactory    *factory.MediaFactory
}

func NewMediaManager(
	authContext *pkgctx.AuthContext,
	orm *db.Orm,
	mediaUploader *MediaUploader,
	helper *Helper,
	mediaRepository *repository.MediaRepository,
	mediaFactory *factory.MediaFactory,
) *MediaManager {
	return &MediaManager{
		authContext:     authContext,
		orm:             orm,
		mediaUploader:   mediaUploader,
		helper:          helper,
		mediaRepository: mediaRepository,
		mediaFactory:    mediaFactory,
	}
}

func (m *MediaManager) Upload(ctx context.Context, body []byte) (media *entity.Media, err error) {
	usr := m.authContext.GetAuthUser(ctx)

	kind, _ := filetype.Match(body)
	if kind == filetype.Unknown {
		return nil, errors.New("Unknow filetype")
	}

	mimeType := kind.MIME.Value

	var mediaType, mediaWidth, mediaHeight int
	if filetype.IsImage(body) {
		mediaType = entity.MEDIA_TYPE_IMAGE
		mediaWidth, mediaHeight, _ = getImageDimension(body)
	} else if filetype.IsVideo(body) {
		mediaType = entity.MEDIA_TYPE_VIDEO
	}

	tx := m.orm.Begin()
	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
		}
	}()

	if err := tx.Error; err != nil {
		return nil, err
	}

	media = m.mediaFactory.CreateByUser(usr)
	media.MimeType = mimeType
	media.Type = mediaType
	media.Size = binary.Size(body)
	media.Width = mediaWidth
	media.Height = mediaHeight

	m.mediaRepository.Save(ctx, media)

	baseDir := m.helper.BaseDirByMedia(ctx, *media)
	media.Path = fmt.Sprintf("%s%s/%s.%s", MEDIA_PREFIX, baseDir, randomString(8), kind.Extension)

	location, err := m.mediaUploader.Put(media.Path, body)

	m.mediaRepository.Save(ctx, media)

	if err != nil {
		tx.Rollback()
		return nil, err
	}

	fmt.Println(location)

	tx.Commit()

	return media, nil

}

func getImageDimension(data []byte) (width int, height int, err error) {
	reader := bytes.NewReader(data)
	image, _, err := image.DecodeConfig(reader)
	if err != nil {
		return 0, 0, err
	}
	return image.Width, image.Height, nil
}

func randomString(length int) string {
	rand.Seed(time.Now().UnixNano())
	b := make([]byte, length)
	rand.Read(b)
	return fmt.Sprintf("%x", b)[:length]
}

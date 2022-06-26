package mediaservice

import (
	"fmt"

	"adfy.io/internal/entity"
	pb "adfy.io/rpc/media"
)

const BASE_DOMAIN = "media.adfy.io"

func NewTransformer() *Transformer {
	return &Transformer{}
}

type Transformer struct {
}

func (t *Transformer) Transofrm(media entity.Media) *pb.Media {

	var mediaType pb.Media_MediaType

	if media.Type == entity.MEDIA_TYPE_IMAGE {
		mediaType = pb.Media_IMAGE
	} else if media.Type == entity.MEDIA_TYPE_VIDEO {
		mediaType = pb.Media_VIDEO
	}

	return &pb.Media{
		Id:     media.ID.String(),
		Url:    fmt.Sprintf("https://%s%s", BASE_DOMAIN, media.Path),
		Mime:   media.MimeType,
		Size:   int32(media.Size),
		Width:  int32(media.Width),
		Height: int32(media.Width),
		Type:   mediaType,
	}
}

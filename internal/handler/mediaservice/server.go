package mediaservice

import (
	"context"

	gprotobuf "github.com/golang/protobuf/ptypes/empty"

	"adfy.io/internal/factory"
	"adfy.io/internal/repository"

	pkgctx "adfy.io/pkg/ctx"
	pb "adfy.io/rpc/media"
	"github.com/twitchtv/twirp"
)

type MediaService struct {
	mediaRepository *repository.MediaRepository
	mediaFactory    *factory.MediaFactory
	transformer     *Transformer
	authContext     *pkgctx.AuthContext
	mediaManager    *MediaManager
}

func NewMediaService(
	mediaRepository *repository.MediaRepository,
	mediaFactory *factory.MediaFactory,
	transformer *Transformer,
	authContext *pkgctx.AuthContext,
	mediaManager *MediaManager,
) *MediaService {
	return &MediaService{
		mediaRepository: mediaRepository,
		mediaFactory:    mediaFactory,
		transformer:     transformer,
		authContext:     authContext,
		mediaManager:    mediaManager,
	}
}

func (s *MediaService) All(ctx context.Context, req *pb.AllRequest) (resp *pb.AllResponse, err error) {
	items, err := s.mediaRepository.All(ctx)

	if err != nil {
		return nil, twirp.InternalError(err.Error())
	}

	var medias []*pb.Media

	for _, item := range items {
		medias = append(medias, s.transformer.Transofrm(item))
	}

	return &pb.AllResponse{
		Medias: medias,
	}, nil
}

func (s *MediaService) Upload(ctx context.Context, req *pb.UploadRequest) (resp *pb.UploadResponse, err error) {

	media, err := s.mediaManager.Upload(ctx, req.Body)

	if err != nil {
		return nil, err
	}

	return &pb.UploadResponse{
		Media: s.transformer.Transofrm(*media),
	}, nil
}

func (s *MediaService) Get(ctx context.Context, req *pb.IdRequest) (resp *pb.GetResponse, err error) {
	model, err := s.mediaRepository.Find(ctx, req.Id)
	if err != nil {
		return nil, twirp.NewErrorf("Model id ? not found", req.Id)
	}

	return &pb.GetResponse{
		Media: s.transformer.Transofrm(*model),
	}, nil
}

func (s *MediaService) Delete(ctx context.Context, req *pb.IdRequest) (resp *gprotobuf.Empty, err error) {
	media, err := s.mediaRepository.Find(ctx, req.Id)
	if err != nil {
		return nil, twirp.NewErrorf("Media ? not found", req.Id)
	}

	err = s.mediaRepository.Delete(ctx, media)

	return &gprotobuf.Empty{}, err
}

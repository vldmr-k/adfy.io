package mediaservice

import (
	"context"

	gprotobuf "github.com/golang/protobuf/ptypes/empty"

	pb "adfy.io/rpc/media"
	"github.com/twitchtv/twirp"
)

type MediaService struct {
	mediaRepository *MediaRepository
	mediaFactory    *MediaFactory
	transformer     *Transformer
}

func NewMediaService(mediaRepository *MediaRepository, mediaFactory *MediaFactory, transformer *Transformer) *MediaService {
	return &MediaService{
		mediaRepository: mediaRepository,
		mediaFactory:    mediaFactory,
		transformer:     transformer,
	}
}

func (s *MediaService) Upload(ctx context.Context, req *pb.UploadRequest) (resp *pb.UploadResponse, err error) {

	return &pb.UploadResponse{}, nil
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

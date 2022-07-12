package placementservice

import (
	pb "adfy.io/rpc/placement"
	"context"
	gprotobuf "github.com/golang/protobuf/ptypes/empty"
	"github.com/twitchtv/twirp"
)

func (s *PlacementService) Delete(ctx context.Context, req *pb.IdRequest) (resp *gprotobuf.Empty, err error) {
	placement, err := s.placmentRepository.Find(ctx, req.Id)

	if err != nil {
		return nil, twirp.NotFound.Errorf("Placement %s not found!", req.Id)
	}

	err = s.placmentRepository.Delete(ctx, placement)

	if err != nil {
		return nil, twirp.InternalError(err.Error())
	}

	return &gprotobuf.Empty{}, nil
}

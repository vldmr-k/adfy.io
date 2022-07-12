package placementservice

import (
	pb "adfy.io/rpc/placement"
	"context"
	"github.com/twitchtv/twirp"
)

func (s *PlacementService) Get(ctx context.Context, req *pb.IdRequest) (resp *pb.GetResponse, err error) {

	placement, err := s.placmentRepository.Find(ctx, req.Id)

	if err != nil {
		return nil, twirp.NotFoundError(`Placement ${req.Id} not found!`)
	}

	return &pb.GetResponse{
		Placement: s.transformer.Transofrm(placement),
	}, nil
}

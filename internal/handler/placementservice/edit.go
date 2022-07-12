package placementservice

import (
	pb "adfy.io/rpc/placement"
	"context"
	"github.com/twitchtv/twirp"
)

func (s *PlacementService) Edit(ctx context.Context, req *pb.EditRequest) (resp *pb.EditResponse, err error) {
	placement, err := s.placmentRepository.Find(ctx, req.Placement.Id)

	if err != nil {
		return nil, twirp.NotFound.Errorf("Placement %s not found!", req.Placement.Id)
	}

	placement.Data = req.Placement.Data
	err = s.placmentRepository.Save(ctx, placement)

	if err != nil {
		return nil, twirp.InternalError(err.Error())
	}

	return &pb.EditResponse{
		Placement: s.transformer.Transofrm(placement),
	}, nil
}

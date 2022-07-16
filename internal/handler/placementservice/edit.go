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

	err = s.placmentRepository.Save(ctx, placement)

	if err != nil {
		return nil, twirp.InternalError(err.Error())
	}

	pbplacement, err := s.transformer.Transofrm(placement)

	if err != nil {
		return nil, twirp.InternalErrorWith(err).WithMeta("placement", placement.ID.String())
	}

	return &pb.EditResponse{
		Placement: pbplacement,
	}, nil
}

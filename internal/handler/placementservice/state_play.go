package placementservice

import (
	pb "adfy.io/rpc/placement"
	"context"
	"github.com/twitchtv/twirp"
)

func (s *PlacementService) StatePlay(ctx context.Context, req *pb.IdRequest) (resp *pb.GetResponse, err error) {

	placement, err := s.placmentRepository.Find(ctx, req.Id)

	if err != nil {
		return nil, twirp.NotFoundError(`Placement ${req.Id} not found!`)
	}

	placement.State = true

	err = s.placmentRepository.Save(ctx, placement)

	if err != nil {
		return nil, twirp.NewError(twirp.ResourceExhausted, "Can't save placement")
	}

	pbplacement, err := s.transformer.Transofrm(placement)
	if err != nil {
		return nil, twirp.InternalErrorWith(err).WithMeta("placement", placement.ID.String())
	}

	return &pb.GetResponse{
		Placement: pbplacement,
	}, nil
}

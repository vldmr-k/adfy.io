package placementservice

import (
	pb "adfy.io/rpc/placement"
	"context"
	"github.com/twitchtv/twirp"
)

func (s *PlacementService) List(ctx context.Context, req *pb.ListRequest) (resp *pb.ListResponse, err error) {
	items, err := s.placmentRepository.All(ctx)
	if err != nil {
		return nil, twirp.NotFoundError(`Placement ${req.Id} not found!`)
	}

	var placements []*pb.Placement
	for _, item := range items {

		pmplacement, err := s.transformer.Transofrm(&item)
		if err != nil {
			return nil, twirp.InternalErrorWith(err).WithMeta("placement", item.ID.String())
		}

		placements = append(placements, pmplacement)
	}

	return &pb.ListResponse{
		Placements: placements,
	}, nil
}

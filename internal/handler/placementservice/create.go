package placementservice

import (
	pb "adfy.io/rpc/placement"
	"context"
	"github.com/twitchtv/twirp"
)

func (s *PlacementService) Create(ctx context.Context, req *pb.CreateRequest) (resp *pb.CreateResponse, err error) {
	usr := s.authContext.GetAuthUser(ctx)

	project, err := s.projectRepository.Find(ctx, req.Placment.Project.Id)

	if err != nil {
		return nil, twirp.NotFoundError(`Project ${req.Placment.Project.Id} not found!`)
	}

	placement := s.placementFactory.CreateByRequest(usr, req)

	err = s.placmentRepository.Create(project, placement)

	if err != nil {
		return nil, twirp.NotFoundError(err.Error())
	}

	return &pb.CreateResponse{
		Placement: s.transformer.Transofrm(placement),
	}, nil
}

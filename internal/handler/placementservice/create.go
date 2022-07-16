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

	placement, err := s.placementFactory.CreateByRequest(usr, req)

	if err != nil {
		return nil, twirp.NewError(twirp.InvalidArgument, err.Error())
	}

	err = s.placmentRepository.Create(project, placement)

	if err != nil {
		return nil, twirp.NotFoundError(err.Error())
	}

	pbplacement, err := s.transformer.Transofrm(placement)

	if err != nil {
		return nil, twirp.NewError(twirp.InvalidArgument, "Exception transform placement")
	}

	return &pb.CreateResponse{
		Placement: pbplacement,
	}, nil
}

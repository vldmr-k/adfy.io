package placementservice

import (
	"context"

	"adfy.io/internal/factory"
	"adfy.io/internal/repository"
	pkgctx "adfy.io/pkg/ctx"
	pb "adfy.io/rpc/placement"
	gprotobuf "github.com/golang/protobuf/ptypes/empty"
	"github.com/twitchtv/twirp"
)

type PlacementService struct {
	placmentRepository *repository.PlacementRepository
	projectRepository  *repository.ProjectRepository
	authContext        *pkgctx.AuthContext
	placementFactory   *factory.PlacementFactory
	transformer        *Transformer
}

func NewPlacementService(
	placementRepository *repository.PlacementRepository,
	projectRepository *repository.ProjectRepository,
	authContext *pkgctx.AuthContext,
	placementFactory *factory.PlacementFactory,
	transformer *Transformer,
) *PlacementService {
	return &PlacementService{
		placmentRepository: placementRepository,
		projectRepository:  projectRepository,
		authContext:        authContext,
		placementFactory:   placementFactory,
		transformer:        transformer,
	}
}

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

func (s *PlacementService) Get(ctx context.Context, req *pb.IdRequest) (resp *pb.GetResponse, err error) {

	placement, err := s.placmentRepository.Find(ctx, req.Id)

	if err != nil {
		return nil, twirp.NotFoundError(`Placement ${req.Id} not found!`)
	}

	return &pb.GetResponse{
		Placement: s.transformer.Transofrm(placement),
	}, nil
}

func (s *PlacementService) GetAllByProject(ctx context.Context, req *pb.GetAllByProjectRequest) (resp *pb.GetAllByProjectResponse, err error) {
	project, err := s.projectRepository.Find(ctx, req.Project.Id)

	if err != nil {
		return nil, twirp.NotFoundError(err.Error())
	}

	items, err := s.placmentRepository.FindAllByProject(ctx, project)

	if err != nil {
		return nil, twirp.NotFoundError(`Placement ${req.Id} not found!`)
	}

	var placements []*pb.Placement
	for _, item := range items {
		placements = append(placements, s.transformer.Transofrm(&item))
	}

	return &pb.GetAllByProjectResponse{
		Placements: placements,
	}, nil
}

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

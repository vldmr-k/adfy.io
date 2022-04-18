package projectservice

import (
	"context"

	pkgctx "adfy.io/pkg/ctx"
	pkgerr "adfy.io/pkg/err"
	gprotobuf "github.com/golang/protobuf/ptypes/empty"
	"github.com/twitchtv/twirp"

	pb "adfy.io/rpc/project"
)

func NewProjectService(projectRepository *ProjectRepository, authContext *pkgctx.AuthContext, projectFactory *ProjectFactory) *ProjectService {
	return &ProjectService{
		projectRepository: projectRepository,
		authContext:       authContext,
		projectFactory:    projectFactory,
	}
}

type ProjectService struct {
	projectRepository *ProjectRepository
	authContext       *pkgctx.AuthContext
	projectFactory    *ProjectFactory
}

func (s *ProjectService) CreateProject(ctx context.Context, req *pb.CreateRequest) (resp *pb.CreateResponse, err error) {

	if validate := req.ValidateAll(); validate != nil {

		var mapError = map[string]string{}
		for _, e := range validate.(pb.CreateRequestMultiError) {
			d := e.(pb.CreateRequestValidationError)
			mapError[d.Field()] = d.Reason()
		}

		return nil, pkgerr.InvalidRequestError(mapError)
	}

	var project = &Project{
		Name:        req.Name,
		Domain:      req.Domain,
		Description: req.Description,
	}

	s.projectRepository.Create(ctx, project)

	return &pb.CreateResponse{
		Project: project.GrpcResponse(),
	}, nil
}

func (s *ProjectService) GetProject(ctx context.Context, req *pb.IdRequest) (resp *pb.GetProjectResponse, err error) {
	project, err := s.projectRepository.Find(ctx, req.Id)

	if err != nil {
		return nil, twirp.InternalError(err.Error())
	}

	return &pb.GetProjectResponse{
		Project: project.GrpcResponse(),
	}, nil
}

func (s *ProjectService) EditProject(ctx context.Context, req *pb.EditRequest) (resp *pb.EditResponse, err error) {
	project, err := s.projectRepository.Find(ctx, req.Id)

	if err != nil {
		return nil, twirp.InternalError(err.Error())
	}

	return &pb.EditResponse{
		Project: project.GrpcResponse(),
	}, nil
}

func (s *ProjectService) AllProject(ctx context.Context, req *gprotobuf.Empty) (resp *pb.AllProjectResponse, err error) {
	items, err := s.projectRepository.All(ctx)

	if err != nil {
		return nil, twirp.InternalError(err.Error())
	}

	var projects []*pb.Project

	for _, item := range items {
		projects = append(projects, item.GrpcResponse())
	}

	return &pb.AllProjectResponse{
		Projects: projects,
	}, nil
}

func (s *ProjectService) DeleteProject(ctx context.Context, req *pb.IdRequest) (resp *gprotobuf.Empty, err error) {
	usr := s.authContext.GetAuthUser(ctx)
	project, err := s.projectRepository.Find(ctx, req.Id)

	if err != nil {
		return nil, twirp.InternalError(err.Error())
	}

	err = s.projectRepository.Delete(usr, project)

	return &gprotobuf.Empty{}, err
}
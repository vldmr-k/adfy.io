package projectservice

import (
	"context"
	"errors"

	"adfy.io/internal/factory"
	"adfy.io/internal/repository"
	pkgctx "adfy.io/pkg/ctx"
	pkgerr "adfy.io/pkg/err"
	gprotobuf "github.com/golang/protobuf/ptypes/empty"
	"github.com/twitchtv/twirp"
	"gorm.io/gorm"

	pb "adfy.io/rpc/project"
)

func NewProjectService(projectRepository *repository.ProjectRepository, authContext *pkgctx.AuthContext, projectFactory *factory.ProjectFactory, transformer *Transformer) *ProjectService {
	return &ProjectService{
		projectRepository: projectRepository,
		authContext:       authContext,
		projectFactory:    projectFactory,
		transformer:       transformer,
	}
}

type ProjectService struct {
	projectRepository *repository.ProjectRepository
	authContext       *pkgctx.AuthContext
	projectFactory    *factory.ProjectFactory
	transformer       *Transformer
}

func (s *ProjectService) Get(ctx context.Context, req *pb.IdRequest) (resp *pb.GetResponse, err error) {
	project, err := s.projectRepository.Find(ctx, req.Id)

	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, twirp.NotFound.Errorf("Project %s not found", req.Id)
	}

	return &pb.GetResponse{
		Project: s.transformer.Transofrm(*project),
	}, nil
}

func (s *ProjectService) Create(ctx context.Context, req *pb.CreateRequest) (resp *pb.CreateResponse, err error) {

	if validate := req.ValidateAll(); validate != nil {
		var mapError = map[string]string{}
		for _, e := range validate.(pb.CreateRequestMultiError) {
			d := e.(pb.CreateRequestValidationError)
			mapError[d.Field()] = d.Reason()
		}
		return nil, pkgerr.InvalidRequestError(mapError)
	}

	usr := s.authContext.GetAuthUser(ctx)
	var project = s.projectFactory.CreateByRequest(usr, req)

	err = s.projectRepository.Create(ctx, project)

	return &pb.CreateResponse{
		Project: s.transformer.Transofrm(*project),
	}, err
}

func (s *ProjectService) Update(ctx context.Context, req *pb.UpdateRequest) (resp *pb.UpdateResponse, err error) {
	project, err := s.projectRepository.Find(ctx, req.Id)

	if err != nil {
		return nil, twirp.InternalError(err.Error())
	}

	if validate := req.ValidateAll(); validate != nil {
		var mapError = map[string]string{}
		for _, e := range validate.(pb.UpdateRequestMultiError) {
			d := e.(pb.UpdateRequestValidationError)
			mapError[d.Field()] = d.Reason()
		}
		return nil, pkgerr.InvalidRequestError(mapError)
	}

	project.Name = req.Name
	project.Domain = req.Domain
	project.Description = req.Description

	s.projectRepository.Save(ctx, project)

	return &pb.UpdateResponse{
		Project: s.transformer.Transofrm(*project),
	}, nil
}

func (s *ProjectService) List(ctx context.Context, req *gprotobuf.Empty) (resp *pb.ListResponse, err error) {
	items, err := s.projectRepository.All(ctx)

	if err != nil {
		return nil, twirp.InternalError(err.Error())
	}

	var projects []*pb.Project

	for _, item := range items {
		projects = append(projects, s.transformer.Transofrm(item))
	}

	return &pb.ListResponse{
		Projects: projects,
	}, nil
}

func (s *ProjectService) Delete(ctx context.Context, req *pb.IdRequest) (resp *gprotobuf.Empty, err error) {
	project, err := s.projectRepository.Find(ctx, req.Id)

	if err != nil {
		return nil, twirp.InternalError(err.Error())
	}

	err = s.projectRepository.Delete(ctx, project)

	return &gprotobuf.Empty{}, err
}

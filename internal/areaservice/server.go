package areaservice

import (
	"context"

	"adfy.io/internal/projectservice"
	pkgctx "adfy.io/pkg/ctx"
	pkgerr "adfy.io/pkg/err"
	pb "adfy.io/rpc/area"
	"github.com/twitchtv/twirp"
)

type AreaService struct {
	areaRepository    AreaRepository
	projectRepository projectservice.ProjectRepository
	authContext       pkgctx.AuthContext
	areaFactory       AreaFactory
	transformer       Transformer
}

func (a *AreaService) Create(ctx context.Context, req *pb.CreateRequest) (resp *pb.CreateResponse, err error) {

	if validate := req.ValidateAll(); validate != nil {
		var mapError = map[string]string{}
		for _, e := range validate.(pb.CreateRequestMultiError) {
			d := e.(pb.CreateRequestValidationError)
			mapError[d.Field()] = d.Reason()
		}
		return nil, pkgerr.InvalidRequestError(mapError)
	}

	usr := a.authContext.GetAuthUser(ctx)
	area := a.areaFactory.CreateByCreateRequest(*usr, req)

	err = a.areaRepository.Create(ctx, area)

	return &pb.CreateResponse{
		Area: a.transformer.Transofrm(*area),
	}, err
}

func (a *AreaService) Get(ctx context.Context, req *pb.IdRequest) (resp *pb.GetResponse, err error) {
	area, err := a.areaRepository.Find(ctx, req.Id)

	return &pb.GetResponse{
		Area: a.transformer.Transofrm(*area),
	}, err
}

func (a *AreaService) GetByProject(ctx context.Context, req *pb.GetByProjectRequest) (resp *pb.GetByProjectResponse, err error) {
	project, err := a.projectRepository.Find(ctx, req.Project.Id)
	items, err := a.areaRepository.GetByProject(ctx, project)

	if err != nil {
		return nil, twirp.InternalError(err.Error())
	}

	var areas []*pb.Area

	for _, item := range items {
		areas = append(areas, a.transformer.Transofrm(item))
	}

	return &pb.GetByProjectResponse{
		Areas: areas,
	}, err
}

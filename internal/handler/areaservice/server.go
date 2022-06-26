package areaservice

import (
	"context"
	"fmt"

	factory "adfy.io/internal/factory"
	"adfy.io/internal/repository"
	pkgctx "adfy.io/pkg/ctx"
	pkgerr "adfy.io/pkg/err"
	pb "adfy.io/rpc/area"
	gprotobuf "github.com/golang/protobuf/ptypes/empty"
	"github.com/twitchtv/twirp"
)

type AreaService struct {
	areaRepository *repository.AreaRepository
	authContext    *pkgctx.AuthContext
	areaFactory    *factory.AreaFactory
	transformer    *Transformer
}

func NewAreaService(
	areaRepository *repository.AreaRepository,
	authContext *pkgctx.AuthContext,
	areaFactory *factory.AreaFactory,
	transformer *Transformer,
) *AreaService {
	return &AreaService{
		areaRepository: areaRepository,
		authContext:    authContext,
		areaFactory:    areaFactory,
		transformer:    transformer,
	}
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

	items, err := a.areaRepository.GetByProject(ctx, req.Project.Id)

	if err != nil {
		return nil, twirp.InternalError(fmt.Sprintf("Error %s. Project %s", err.Error(), req.Project.Id))
	}

	var areas []*pb.Area

	for _, item := range items {
		areas = append(areas, a.transformer.Transofrm(item))
	}

	return &pb.GetByProjectResponse{
		Areas: areas,
	}, err
}

func (a *AreaService) Edit(ctx context.Context, req *pb.EditRequest) (resp *pb.EditResponse, err error) {
	area, err := a.areaRepository.Find(ctx, req.AreaId)

	if err != nil {
		return nil, twirp.NotFoundError(fmt.Sprintf("Area %s not found", req.AreaId))
	}

	area.Name = req.Area.Name
	area.Position = int32(req.Area.Position)

	return &pb.EditResponse{
		Area: a.transformer.Transofrm(*area),
	}, err
}

func (a *AreaService) Delete(ctx context.Context, req *pb.IdRequest) (resp *gprotobuf.Empty, err error) {
	area, err := a.areaRepository.Find(ctx, req.Id)

	if err != nil {
		return nil, twirp.NotFoundError(fmt.Sprintf("Area %s not found", req.Id))
	}

	err = a.areaRepository.Delete(ctx, area)

	return &gprotobuf.Empty{}, err
}

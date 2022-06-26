package factory

import (
	entity "adfy.io/internal/entity"
	jwtpkg "adfy.io/pkg/jwt"
	pb "adfy.io/rpc/area"
)

type AreaFactory struct{}

func NewAreaFactory() *AreaFactory {
	return &AreaFactory{}
}

func (a *AreaFactory) Create() *entity.Area {
	return &entity.Area{}
}

func (a *AreaFactory) CreateForUser(usr jwtpkg.AuthUser) *entity.Area {
	area := a.Create()
	area.OwnerID = usr.ID
	return area
}

func (a *AreaFactory) CreateByCreateRequest(usr jwtpkg.AuthUser, req *pb.CreateRequest) *entity.Area {
	area := a.CreateForUser(usr)
	area.Name = req.Name
	area.ProjectID = req.ProjectId

	return area
}

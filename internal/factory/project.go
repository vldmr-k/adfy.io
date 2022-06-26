package factory

import (
	"adfy.io/internal/entity"
	"adfy.io/pkg/jwt"
	pb "adfy.io/rpc/project"
)

func NewProjectFactory() *ProjectFactory {
	return &ProjectFactory{}
}

type ProjectFactory struct{}

//Init Project Model
func (p *ProjectFactory) Create() *entity.Project {
	return &entity.Project{}
}

//Init Project Model by *jwt.AuthUser
func (p *ProjectFactory) CreateByUser(usr *jwt.AuthUser) *entity.Project {
	return &entity.Project{
		OwnerID: usr.ID,
	}
}

//Init Project Model by pb.CreateRequest
func (p *ProjectFactory) CreateByRequest(usr *jwt.AuthUser, req *pb.CreateRequest) *entity.Project {
	project := p.CreateByUser(usr)
	project.Name = req.Name
	project.Domain = req.Domain
	project.Description = req.Description
	project.Areas = []entity.Area{{Name: "Default", Position: int32(0), OwnerID: project.OwnerID, Immutable: false}}

	return project
}

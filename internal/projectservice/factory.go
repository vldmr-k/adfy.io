package projectservice

import (
	"adfy.io/pkg/jwt"
	pb "adfy.io/rpc/project"
)

func NewProjectFactory() *ProjectFactory {
	return &ProjectFactory{}
}

type ProjectFactory struct{}

//Init Project Model
func (p *ProjectFactory) Create() *Project {
	return &Project{}
}

//Init Project Model by *jwt.AuthUser
func (p *ProjectFactory) CreateByUser(usr *jwt.AuthUser) *Project {
	return &Project{
		OwnerID: usr.ID.String(),
	}
}

//Init Project Model by pb.CreateRequest
func (p *ProjectFactory) CreateByRequest(usr *jwt.AuthUser, req *pb.CreateRequest) *Project {
	project := p.CreateByUser(usr)
	project.Name = req.Name
	project.Domain = req.Domain
	project.Description = req.Description

	return project
}

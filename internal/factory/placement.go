package factory

import (
	"adfy.io/internal/entity"
	"adfy.io/pkg/jwt"
	pb "adfy.io/rpc/placement"
)

type PlacementFactory struct{}

func NewPlacementFactory() *PlacementFactory {
	return &PlacementFactory{}
}

//Init Placement Model
func (p *PlacementFactory) Create() *entity.Placement {
	return &entity.Placement{}
}

func (p *PlacementFactory) CreateByUser(usr *jwt.AuthUser) *entity.Placement {
	return &entity.Placement{
		OwnerID: usr.ID,
	}
}

//Init Project Model by pb.CreateRequest
func (p *PlacementFactory) CreateByRequest(usr *jwt.AuthUser, req *pb.CreateRequest) *entity.Placement {
	placement := p.CreateByUser(usr)
	placement.Name = req.Placment.Name
	placement.ProjectID = req.Placment.Project.Id
	placement.AreaID = req.Placment.Area.Id
	placement.TemplateID = req.Placment.Template.Id
	placement.Data = req.Placment.Data
	placement.TemplateCode = req.Placment.Template.Component
	placement.Data = req.Placment.Template.SampleData
	placement.State = false
	return placement
}

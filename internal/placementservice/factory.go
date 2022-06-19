package placementservice

import (
	"adfy.io/pkg/jwt"
	pb "adfy.io/rpc/placement"
)

type PlacementFactory struct{}

func NewPlacementFactory() *PlacementFactory {
	return &PlacementFactory{}
}

//Init Placement Model
func (p *PlacementFactory) Create() *Placement {
	return &Placement{}
}

func (p *PlacementFactory) CreateByUser(usr *jwt.AuthUser) *Placement {
	return &Placement{
		OwnerID: usr.ID,
	}
}

//Init Project Model by pb.CreateRequest
func (p *PlacementFactory) CreateByRequest(usr *jwt.AuthUser, req *pb.CreateRequest) *Placement {
	placement := p.CreateByUser(usr)
	placement.ProjectID = req.Placment.Project.Id
	placement.AreaID = req.Placment.Area.Id
	placement.TemplateID = req.Placment.Template.Id
	placement.Data = req.Placment.Data
	return placement
}

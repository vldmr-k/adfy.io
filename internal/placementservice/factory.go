package placementservice

import (
	"adfy.io/pkg/jwt"
	pb "adfy.io/rpc/placement"
)

func NewPlacementFactory() *PlacementFactory {
	return &PlacementFactory{}
}

type PlacementFactory struct {
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
	placement.ProjectID = req.Project.Id
	placement.AreaID = req.Area.Id
	placement.TemplateID = req.Template.Id

	return placement
}

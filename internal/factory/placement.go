package factory

import (
	"adfy.io/internal/entity"
	"adfy.io/pkg/jwt"
	pb "adfy.io/rpc/placement"
	"gorm.io/datatypes"
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
func (p *PlacementFactory) CreateByRequest(usr *jwt.AuthUser, req *pb.CreateRequest) (placement *entity.Placement, err error) {
	placement = p.CreateByUser(usr)
	placement.Name = req.Placment.Name
	placement.ProjectID = req.Placment.Project.Id
	placement.AreaID = req.Placment.Area.Id
	placement.TemplateID = req.Placment.Template.Id
	placement.State = false

	schema, err := req.Placment.Template.Schema.MarshalJSON()
	if err != nil {
		return nil, err
	}

	sampleAttributes, err := req.Placment.Template.SampleAttributes.MarshalJSON()
	if err != nil {
		return nil, err
	}

	placement.Metadata = entity.PlacementMetadata{
		Schema:           datatypes.JSON(schema),
		SampleAttributes: datatypes.JSON(sampleAttributes),
		Layout:           req.Placment.Template.Layout,
		LayoutVersion:    req.Placment.Template.LayoutVersion,
		Attributes:       datatypes.JSON(sampleAttributes),
	}

	return placement, nil
}

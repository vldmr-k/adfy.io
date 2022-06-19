package areaservice

import (
	"adfy.io/internal/projectservice"
	pb "adfy.io/rpc/area"
)

type Transformer struct {
	projectTransformer *projectservice.Transformer
}

func NewTransformer(
	projectTransformer *projectservice.Transformer,
) *Transformer {
	return &Transformer{
		projectTransformer: projectTransformer,
	}
}

func (t *Transformer) Transofrm(area Area) *pb.Area {
	return &pb.Area{
		Id:        area.ID.String(),
		Name:      area.Name,
		ProjectId: area.ProjectID,
	}
}

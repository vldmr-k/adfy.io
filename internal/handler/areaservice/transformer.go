package areaservice

import (
	"adfy.io/internal/entity"
	pb "adfy.io/rpc/area"
)

type Transformer struct{}

func NewTransformer() *Transformer {
	return &Transformer{}
}

func (t *Transformer) Transofrm(area entity.Area) *pb.Area {
	return &pb.Area{
		Id:        area.ID.String(),
		Name:      area.Name,
		ProjectId: area.ProjectID,
	}
}

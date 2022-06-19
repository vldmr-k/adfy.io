package placementservice

import (
	"adfy.io/internal/areaservice"
	"adfy.io/internal/projectservice"
	"adfy.io/internal/templateservice"
	pb "adfy.io/rpc/placement"
)

type Transformer struct {
	projectTransformer  *projectservice.Transformer
	areaTransformer     *areaservice.Transformer
	templateTransformer *templateservice.Transformer
}

func NewTransformer(
	projectTransformer *projectservice.Transformer,
	areaTransformer *areaservice.Transformer,
	templateTransformer *templateservice.Transformer,
) *Transformer {
	return &Transformer{
		projectTransformer:  projectTransformer,
		areaTransformer:     areaTransformer,
		templateTransformer: templateTransformer,
	}
}

func (t *Transformer) Transofrm(placement *Placement) *pb.Placement {
	return &pb.Placement{
		Id:      placement.ID.String(),
		Name:    placement.Name,
		Project: t.projectTransformer.Transofrm(placement.Project),
		Area:    t.areaTransformer.Transofrm(placement.Area),
	}
}

package placementservice

import (
	"adfy.io/internal/entity"
	"adfy.io/internal/handler/areaservice"
	"adfy.io/internal/handler/projectservice"
	"adfy.io/internal/handler/templateservice"
	pb "adfy.io/rpc/placement"
	"google.golang.org/protobuf/types/known/structpb"
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

func (t *Transformer) Transofrm(placement *entity.Placement) (pbplacement *pb.Placement, err error) {

	metadata, err := t.TransformMetadata(placement.Metadata)

	pbplacement = &pb.Placement{
		Id:       placement.ID.String(),
		Name:     placement.Name,
		Project:  t.projectTransformer.Transofrm(placement.Project),
		Area:     t.areaTransformer.Transofrm(placement.Area),
		Metadata: metadata,
	}

	return pbplacement, err
}

func (t *Transformer) TransformMetadata(metadata entity.PlacementMetadata) (placement *pb.PlacementMetadata, err error) {

	schema, err := structpb.NewValue(metadata.Schema.String())
	if err != nil {
		return nil, err
	}

	sampleAttributes, err := structpb.NewValue(metadata.SampleAttributes.String())
	if err != nil {
		return nil, err
	}

	attributes, err := structpb.NewValue(metadata.Attributes.String())
	if err != nil {
		return nil, err
	}

	placement = &pb.PlacementMetadata{
		Layout:           metadata.Layout,
		LayoutVersion:    metadata.LayoutVersion,
		Schema:           schema,
		SampleAttributes: sampleAttributes,
		Attributes:       attributes,
	}

	return placement, err
}

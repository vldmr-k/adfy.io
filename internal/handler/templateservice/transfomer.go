package templateservice

import (
	"adfy.io/internal/entity"
	pb "adfy.io/rpc/template"
	structpb "google.golang.org/protobuf/types/known/structpb"
)

func NewTransformer() *Transformer {
	return &Transformer{}
}

type Transformer struct{}

func (t *Transformer) Transofrm(entity entity.Template) (template *pb.Template, err error) {

	schema, err := structpb.NewValue(entity.Schema.String())
	if err != nil {
		return nil, err
	}

	sampleAttributes, err := structpb.NewValue(entity.SampleAttributes.String())
	if err != nil {
		return nil, err
	}

	return &pb.Template{
		Id:               entity.ID.String(),
		Name:             entity.Name,
		Layout:           entity.Layout,
		LayoutVersion:    entity.LayoutVersion,
		Schema:           schema,
		SampleAttributes: sampleAttributes,
	}, nil
}

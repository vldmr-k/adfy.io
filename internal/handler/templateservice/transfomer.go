package templateservice

import (
	"adfy.io/internal/entity"
	pb "adfy.io/rpc/template"
)

func NewTransformer() *Transformer {
	return &Transformer{}
}

type Transformer struct{}

func (t *Transformer) Transofrm(template entity.Template) *pb.Template {
	return &pb.Template{
		Id:         template.ID.String(),
		Name:       template.Name,
		Component:  template.Component,
		FormSchema: template.FormSchema,
		SampleData: template.SampleData,
	}
}

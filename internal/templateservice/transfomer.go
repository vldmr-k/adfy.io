package templateservice

import (
	pb "adfy.io/rpc/template"
)

func NewTransformer() *Transformer {
	return &Transformer{}
}

type Transformer struct{}

func (t *Transformer) Transofrm(template Template) *pb.Template {
	return &pb.Template{
		Id:         template.ID.String(),
		Name:       template.Name,
		Component:  template.Component,
		FormSchema: template.FormSchema,
		SampleData: template.SampleData,
	}
}

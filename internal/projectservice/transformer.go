package projectservice

import pb "adfy.io/rpc/project"

type Transformer struct{}

func NewTransformer() *Transformer {
	return &Transformer{}
}

func (t *Transformer) Transofrm(project Project) *pb.Project {
	return &pb.Project{
		Id:          project.ID.String(),
		Name:        project.Name,
		Domain:      project.Domain,
		Description: project.Description,
		EmbedCode:   "html super code",
	}
}

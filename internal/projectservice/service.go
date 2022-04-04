package projectservice

import (
	"context"
	"encoding/json"

	"adfy.io/rpc/project"
	pb "adfy.io/rpc/project"
	"github.com/twitchtv/twirp"
)

func NewProjectService() *ProjectService {
	return &ProjectService{}
}

type ProjectService struct{}

func (s *ProjectService) CreateProject(ctx context.Context, req *pb.CreateRequest) (resp *pb.ProjectResponse, err error) {

	if err := req.ValidateAll(); err != nil {

		twerr := twirp.NewError(twirp.Unavailable, "Error Validate")

		m := err.(pb.CreateRequestMultiError)
		o := make(map[string]string)

		for _, e := range m.AllErrors() {
			err := e.(project.CreateRequestValidationError)
			o[err.Field()] = err.Reason()
		}

		errorsJson, _ := json.Marshal(o)
		twerr = twerr.WithMeta("validation", string(errorsJson))

		return nil, twerr
	}

	return &pb.ProjectResponse{
		Id: "project-tokken",
	}, nil
}

func (s *ProjectService) EditProject(ctx context.Context, req *pb.EditRequest) (resp *pb.ProjectResponse, err error) {
	return &pb.ProjectResponse{
		Id:     "project-tt",
		Result: true,
	}, nil
}

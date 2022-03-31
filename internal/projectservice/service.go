package projectservice

import (
	"context"

	pb "adfy.com/rpc/project"
)

type ProjectService struct{}

func (s *ProjectService) CreateProject(ctx context.Context, req *pb.ProjectRequest) (resp *pb.ProjectResponse, err error) {
	return &pb.ProjectResponse{
		Id: "project-tokken",
	}, nil
}

func (s *ProjectService) EditProject(ctx context.Context, req *pb.ProjectRequest) (resp *pb.ProjectResponse, err error) {
	return &pb.ProjectResponse{
		Id:     "project-tt",
		Result: true,
	}, nil
}

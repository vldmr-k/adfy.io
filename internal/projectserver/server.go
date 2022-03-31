package userserver

import (
	"context"

	pb "adfy.com/rpc/project"
)

type Server struct{}

func (s *Server) CreateProject(ctx context.Context, req *pb.ProjectRequest) (resp *pb.ProjectResponse, err error) {
	return &pb.ProjectResponse{
		Id: "project-tokken",
	}, nil
}

func (s *Server) EditProject(ctx context.Context, req *pb.ProjectRequest) (resp *pb.ProjectResponse, err error) {
	return &pb.ProjectResponse{
		Id:     "project-tt",
		Result: true,
	}, nil
}

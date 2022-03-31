package userservice

import (
	"context"

	pb "adfy.com/rpc/user"
)

type UserService struct{}

func (s *UserService) SignIn(ctx context.Context, req *pb.SignInRequest) (resp *pb.SignInResponse, err error) {
	return &pb.SignInResponse{
		Token: "jwt-tokken",
	}, nil
}

func (s *UserService) Register(ctx context.Context, req *pb.RegisterRequest) (resp *pb.RegisterResponse, err error) {
	return &pb.RegisterResponse{
		Result: true,
	}, nil
}

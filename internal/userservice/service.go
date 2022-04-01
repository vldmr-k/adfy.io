package userservice

import (
	"context"

	pb "adfy.io/rpc/user"
)

type UserService struct{}

func (s *UserService) SignIn(ctx context.Context, req *pb.SignInRequest) (resp *pb.SignInResponse, err error) {
	return &pb.SignInResponse{
		Token: ctx.Value("user").(string),
	}, nil
}

func (s *UserService) SignUp(ctx context.Context, in *pb.SignUpRequest) (out *pb.SignUpResponse, err error) {
	return &pb.SignUpResponse{
		Result: true,
	}, nil
}

package userservice

import (
	"context"

	"adfy.io/pkg/jwt"
	"adfy.io/pkg/secure"
	pb "adfy.io/rpc/user"
	"github.com/twitchtv/twirp"
)

func NewUserService(jwt *jwt.JWT, secure *secure.Secure, userRepository *UserRepository) *UserService {
	return &UserService{
		JWT:            jwt,
		Secure:         secure,
		UserRepository: userRepository,
	}
}

type UserService struct {
	JWT            *jwt.JWT
	Secure         *secure.Secure
	UserRepository *UserRepository
}

func (s *UserService) SignIn(ctx context.Context, req *pb.SignInRequest) (resp *pb.SignInResponse, err error) {

	u, err := s.UserRepository.FindByEmail(req.Email)

	if err != nil {
		return nil, err
	}

	result := s.Secure.MatchesHash(u.EncryptedPassword, req.Password)

	if !result {
		return nil, twirp.NotFoundError("User not found or password is incorrect")
	}

	token, err := s.JWT.GenerateToken(u.GetAuthUser())
	if err != nil {
		return nil, twirp.InternalError(err.Error())
	}

	return &pb.SignInResponse{
		Token: token,
	}, nil
}

func (s *UserService) SignUp(ctx context.Context, req *pb.SignUpRequest) (out *pb.SignUpResponse, err error) {

	if err := req.Validate(); err != nil {
		return nil, err
	}

	m := &User{
		Name:              req.Name,
		Email:             req.Email,
		EncryptedPassword: s.Secure.Hash(req.Password),
	}

	if err := s.UserRepository.Create(m); err != nil {
		return nil, err
	}

	token, err := s.JWT.GenerateToken(m.GetAuthUser())
	if err != nil {
		return nil, twirp.InternalError(err.Error())
	}

	return &pb.SignUpResponse{
		Token: token,
	}, nil
}

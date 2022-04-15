package userservice

import (
	"context"

	pkgctx "adfy.io/pkg/ctx"
	pkgerr "adfy.io/pkg/err"
	"adfy.io/pkg/jwt"
	"adfy.io/pkg/secure"
	pb "adfy.io/rpc/user"
	"github.com/twitchtv/twirp"
)

func NewUserService(jwt *jwt.JWT, secure *secure.Secure, userRepository *UserRepository, authContext *pkgctx.AuthContext) *UserService {
	return &UserService{
		JWT:            jwt,
		Secure:         secure,
		UserRepository: userRepository,
		AuthContext:    authContext,
	}
}

type UserService struct {
	JWT            *jwt.JWT
	Secure         *secure.Secure
	UserRepository *UserRepository
	AuthContext    *pkgctx.AuthContext
}

func (s *UserService) SignIn(ctx context.Context, req *pb.SignInRequest) (resp *pb.SignInResponse, err error) {

	if validate := req.ValidateAll(); validate != nil {

		var mapError = map[string]string{}
		for _, e := range validate.(pb.SignInRequestMultiError) {
			d := e.(pb.SignInRequestValidationError)
			mapError[d.Field()] = d.Reason()
		}

		return nil, pkgerr.InvalidRequestError(mapError)
	}

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

func (s *UserService) Me(ctx context.Context, req *pb.Empty) (out *pb.MeResponse, err error) {
	user := s.AuthContext.GetAuthUser(ctx)
	return &pb.MeResponse{
		Id:    user.ID.String(),
		Email: user.Email,
		Name:  user.Name,
	}, nil
}

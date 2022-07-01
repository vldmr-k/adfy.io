package userservice

import (
	"context"
	"errors"

	"adfy.io/internal/entity"
	"adfy.io/internal/repository"
	pkgctx "adfy.io/pkg/ctx"
	pkgerr "adfy.io/pkg/err"
	"adfy.io/pkg/jwt"
	"adfy.io/pkg/secure"
	pb "adfy.io/rpc/user"
	gprotobuf "github.com/golang/protobuf/ptypes/empty"
	"github.com/twitchtv/twirp"
	"gorm.io/gorm"
)

func NewUserService(jwt *jwt.JWT, secure *secure.Secure, userRepository *repository.UserRepository, authContext *pkgctx.AuthContext, transformer *Transformer) *UserService {
	return &UserService{
		JWT:            jwt,
		Secure:         secure,
		UserRepository: userRepository,
		AuthContext:    authContext,
		Transformer:    transformer,
	}
}

type UserService struct {
	JWT            *jwt.JWT
	Secure         *secure.Secure
	UserRepository *repository.UserRepository
	AuthContext    *pkgctx.AuthContext
	Transformer    *Transformer
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

	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, twirp.NotFound.Errorf("User %s not found", req.Email)
	}

	if err != nil {
		return nil, twirp.InternalError(err.Error())
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

	m := &entity.User{
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

func (s *UserService) Me(ctx context.Context, req *gprotobuf.Empty) (out *pb.MeResponse, err error) {
	authUser := s.AuthContext.GetAuthUser(ctx)
	user, err := s.UserRepository.Find(authUser.ID)

	if err != nil {
		return nil, twirp.NotFoundError(err.Error())
	}

	return &pb.MeResponse{
		User: s.Transformer.Transofrm(user),
	}, nil
}

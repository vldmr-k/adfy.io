package userservice

import (
	"adfy.io/internal/entity"
	pb "adfy.io/rpc/user"
)

func NewTransformer() *Transformer {
	return &Transformer{}
}

type Transformer struct{}

func (t *Transformer) Transofrm(user entity.User) *pb.User {

	return &pb.User{
		Id:    user.ID.String(),
		Name:  user.Name,
		Email: user.Email,
	}

}

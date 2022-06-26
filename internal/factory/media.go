package factory

import (
	"adfy.io/internal/entity"
	"adfy.io/pkg/jwt"
)

func NewMediaFactory() *MediaFactory {
	return &MediaFactory{}
}

type MediaFactory struct{}

//Init Media Model
func (p *MediaFactory) Create() *entity.Media {
	return &entity.Media{}
}

//Init Media Model by *jwt.AuthUser
func (p *MediaFactory) CreateByUser(usr *jwt.AuthUser) *entity.Media {
	return &entity.Media{
		OwnerID: usr.ID,
	}
}

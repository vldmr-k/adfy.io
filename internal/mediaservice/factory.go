package mediaservice

import (
	"adfy.io/pkg/jwt"
)

func NewMediaFactory() *MediaFactory {
	return &MediaFactory{}
}

type MediaFactory struct{}

//Init Media Model
func (p *MediaFactory) Create() *Media {
	return &Media{}
}

//Init Media Model by *jwt.AuthUser
func (p *MediaFactory) CreateByUser(usr *jwt.AuthUser) *Media {
	return &Media{
		OwnerID: usr.ID,
	}
}

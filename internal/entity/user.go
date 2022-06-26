package entity

import (
	"adfy.io/pkg/db"
	"adfy.io/pkg/jwt"
)

type (
	User struct {
		db.BaseModel
		Name              string `gorm:"type:varchar(128);not null;"`
		Email             string `gorm:"type:varchar(128);not null;uniqueIndex"`
		EncryptedPassword string `gorm:"type:varchar(128);not null;index"`

		Projects []Project `gorm:"foreignKey:OwnerID"`
		Medias   []Media   `gorm:"foreignKey:OwnerID"`
	}
)

func (u *User) GetAuthUser() *jwt.AuthUser {
	return &jwt.AuthUser{
		ID:    u.ID.String(),
		Email: u.Email,
		Name:  u.Name,
	}
}

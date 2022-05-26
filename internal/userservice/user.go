package userservice

import (
	projectservice "adfy.io/internal/projectservice"
	"adfy.io/pkg/db"
	"adfy.io/pkg/jwt"
)

const bcryptCost = 12

type (
	User struct {
		db.BaseModel
		Name              string `gorm:"type:varchar(128);not null;"`
		Email             string `gorm:"type:varchar(128);not null;uniqueIndex"`
		EncryptedPassword string `gorm:"type:varchar(128);not null;index"`

		Projects []projectservice.Project `gorm:"foreignKey:OwnerID"`
	}
)

func (u *User) GetAuthUser() *jwt.AuthUser {
	return &jwt.AuthUser{
		ID:    u.ID.String(),
		Email: u.Email,
		Name:  u.Name,
	}
}

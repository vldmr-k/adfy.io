package userservice

import (
	"adfy.com/internal/kernel"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"

	projectservice "adfy.com/internal/projectservice"
)

const bcryptCost = 12

type (
	User struct {
		kernel.BaseModel
		Name              string `gorm:"type:varchar(128);not null;"`
		Email             string `gorm:"type:varchar(128);not null;unique_index"`
		EncryptedPassword string `gorm:"type:varchar(128);not null;index"`

		Projects []projectservice.Project `gorm:"foreignKey:OwnerID"`
	}
	AuthUser struct {
		ID    uuid.UUID
		Name  string
		Email string
	}
)

func (u *User) Sanitize() {
	u.EncryptedPassword = "***"
}

func EncryptPassword(plainPassword string) string {
	hash, err := bcrypt.GenerateFromPassword([]byte(plainPassword), bcryptCost)
	if err != nil {
		panic(err)
	}
	return string(hash)
}

func (u *User) VerifyPassword(plainPassword string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(u.EncryptedPassword), []byte(plainPassword))
	if err != nil {
		return false
	}

	return true
}

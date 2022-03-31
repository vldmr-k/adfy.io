package domain

import (
	"adfy.com/internal/kernel"
	"golang.org/x/crypto/bcrypt"

	projectdomain "adfy.com/internal/projectserver/domain"
)

const bcryptCost = 12

type (
	User struct {
		kernel.Base
		FirstName         string `gorm:"type:varchar(128);not null;"`
		LastName          string `gorm:"type:varchar(128);not null;"`
		Email             string `gorm:"type:varchar(128);not null;unique_index"`
		EncryptedPassword string `gorm:"type:varchar(128);not null;index"`

		Projects []projectdomain.Project `gorm:"foreignKey:OwnerID"`
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

package kernel

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Base struct {
	gorm.Model

	ID uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4()"`
}

type Sanitize interface {
	Sanitize()
}

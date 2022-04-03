package db

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type BaseModel struct {
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`

	ID uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4()"`
}

type Sanitize interface {
	Sanitize()
}

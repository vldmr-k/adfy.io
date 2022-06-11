package areaservice

import (
	"adfy.io/pkg/db"
)

type (
	Area struct {
		db.BaseModel
		Name      string `gorm:"type:varchar(128);not null;"`
		OwnerID   string `gorm:"type:uuid;not null;"`
		ProjectID string `gorm:"type:uuid;not null;"`
	}
)

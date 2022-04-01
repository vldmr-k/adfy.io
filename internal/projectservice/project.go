package projectservice

import (
	"adfy.io/pkg/db"
)

type Project struct {
	db.BaseModel
	OwnerID string `gorm:"not null;"`
	Name    string `gorm:"type:varchar(128);not null;"`
	Website string `gorm:"type:varchar(128);not null;"`
}

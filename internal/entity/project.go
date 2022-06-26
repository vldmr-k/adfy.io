package entity

import (
	"adfy.io/pkg/db"
	"github.com/lib/pq"
)

type Project struct {
	db.BaseModel
	OwnerID     string         `gorm:"type:uuid;not null;"`
	Name        string         `gorm:"type:varchar(128);not null;"`
	Domain      pq.StringArray `gorm:"type:text[]"`
	Description string         `gorm:"type:varchar(255);"`
	Areas       []Area         `gorm:"foreignKey:ProjectID"`
}

package domain

import "adfy.com/internal/kernel"

type Project struct {
	kernel.Base
	OwnerID string `gorm:"not null;"`
	Name    string `gorm:"type:varchar(128);not null;"`
	Website string `gorm:"type:varchar(128);not null;"`
}

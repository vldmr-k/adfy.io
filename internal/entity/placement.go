package entity

import (
	"adfy.io/pkg/db"
)

type (
	Placement struct {
		db.BaseModel
		Name         string `gorm:"type:varchar(128);not null;"`
		State        bool   `gorm:"type:boolean;not null;default:false"`
		OwnerID      string `gorm:"type:uuid;not null;"`
		ProjectID    string `gorm:"type:uuid;not null;"`
		Project      Project
		AreaID       string `gorm:"type:uuid;not null;"`
		Area         Area
		TemplateID   string `gorm:"type:uuid;not null;"`
		Template     Template
		TemplateCode string `gorm:"type:text;not null;"`
		Data         string `gorm:"type:text;not null;"`
	}
)

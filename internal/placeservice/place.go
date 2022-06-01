package placeservice

import (
	"adfy.io/pkg/db"
)

type (
	Place struct {
		db.BaseModel
		Name       string `gorm:"type:varchar(128);not null;"`
		Component  string `gorm:"type:text;not null;"`
		FormSchema string `gorm:"type:text;not null;"`
		SampleData string `gorm:"type:text;not null;"`
	}
)

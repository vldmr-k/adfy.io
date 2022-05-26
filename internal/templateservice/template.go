package templateservice

import (
	"adfy.io/pkg/db"
)

const bcryptCost = 12

type (
	Template struct {
		db.BaseModel
		Name       string `gorm:"type:varchar(128);not null;"`
		Component  string `gorm:"type:text;not null;"`
		FormSchema string `gorm:"type:text;not null;"`
		SampleData string `gorm:"type:text;not null;"`
	}
)

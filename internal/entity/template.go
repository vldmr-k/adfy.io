package entity

import (
	"adfy.io/pkg/db"
	"gorm.io/gorm"
)

type (
	Template struct {
		db.BaseModel
		Name       string `gorm:"type:varchar(128);not null;"`
		Component  string `gorm:"type:text;not null;"`
		Type       int32  `gorm:"type:int;not null;"`
		FormSchema string `gorm:"type:text;not null;"`
		SampleData string `gorm:"type:text;not null;"`
		Version    int32  `gorm:"type:int;not null;default:1"`
	}
)

func (t *Template) BeforeUpdate(tx *gorm.DB) (err error) {
	t.Version = (t.Version + 1)
	return
}

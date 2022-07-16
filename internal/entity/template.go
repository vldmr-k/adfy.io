package entity

import (
	"adfy.io/pkg/db"
	"gorm.io/datatypes"
	"gorm.io/gorm"
)

type (
	Template struct {
		db.BaseModel
		Name             string `gorm:"type:varchar(128);not null;"`
		Layout           string `gorm:"type:text;"`
		LayoutVersion    uint32
		Type             int32 `gorm:"type:int;not null;"`
		Schema           datatypes.JSON
		SampleAttributes datatypes.JSON
	}
)

func (t *Template) BeforeCreate(tx *gorm.DB) (err error) {
	t.LayoutVersion = 1

	return
}

func (t *Template) BeforeUpdate(tx *gorm.DB) (err error) {
	t.LayoutVersion = (t.LayoutVersion + 1)
	return
}

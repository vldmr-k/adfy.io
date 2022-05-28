package mediaservice

import (
	"adfy.io/pkg/db"
)

const MEDIA_TYPE_IMAGE = 1
const MEDIA_TYPE_VIDEO = 2

type (
	Media struct {
		db.BaseModel
		OwnerID  string `gorm:"type:uuid;not null;"`
		Path     string `gorm:"type:string;not null;"`
		MimeType string `gorm:"type:string;not null;"`
		Size     int32  `gorm:"type:integer;not null;"`
		Width    int32  `gorm:"type:integer;"`
		Height   int32  `gorm:"type:integer;"`
		Type     int32  `gorm:"type:integer;not null;"`
	}
)

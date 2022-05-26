package mediaservice

import (
	"adfy.io/pkg/db"
)

const MEDIA_TYPE_IMAGE = "IMAGE"
const MEDIA_TYPE_VIDEO = "VIDEO"

type (
	Media struct {
		db.BaseModel
		OwnerID  string `gorm:"type:uuid;not null;"`
		Path     string `gorm:"type:string;not null;"`
		MimeType string `gorm:"type:string;not null;"`
		Size     int32  `gorm:"type:integer;not null;"`
		Width    int32  `gorm:"type:width;not null;"`
		Height   int32  `gorm:"type:height;not null;"`
		Type     string `gorm:"type:type;not null;"`
	}
)

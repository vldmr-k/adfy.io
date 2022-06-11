package placementservice

import (
	areaservice "adfy.io/internal/areaservice"
	projectservice "adfy.io/internal/projectservice"
	templateservice "adfy.io/internal/templateservice"
	"adfy.io/pkg/db"
)

type (
	Placement struct {
		db.BaseModel
		Name         string `gorm:"type:varchar(128);not null;"`
		OwnerID      string `gorm:"type:uuid;not null;"`
		ProjectID    string `gorm:"type:uuid;not null;"`
		Project      projectservice.Project
		AreaID       string `gorm:"type:uuid;not null;"`
		Area         areaservice.Area
		TemplateID   string `gorm:"type:uuid;not null;"`
		Template     templateservice.Template
		TemplateCode string `gorm:"type:text;not null;"`
		Data         string `gorm:"type:text;not null;"`
	}
)

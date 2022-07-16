package entity

import (
	"adfy.io/pkg/db"
	"github.com/google/uuid"
	"gorm.io/datatypes"
)

type (
	Placement struct {
		db.BaseModel
		Name       string `gorm:"type:varchar(128);not null;"`
		State      bool   `gorm:"type:boolean;not null;default:false"`
		OwnerID    string `gorm:"type:uuid;not null;"`
		ProjectID  string `gorm:"type:uuid;not null;"`
		Project    Project
		AreaID     string `gorm:"type:uuid;not null;"`
		Area       Area
		TemplateID string `gorm:"type:uuid;not null;"`
		Template   Template
		MetadataID uuid.UUID
		Metadata   PlacementMetadata
	}
	PlacementMetadata struct {
		db.BaseModel
		Layout           string `gorm:"type:text;not null;"`
		LayoutVersion    uint32
		Schema           datatypes.JSON
		SampleAttributes datatypes.JSON
		Attributes       datatypes.JSON
	}
)

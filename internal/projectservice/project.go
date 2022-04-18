package projectservice

import (
	"adfy.io/pkg/db"
	pb "adfy.io/rpc/project"
	"github.com/google/uuid"
	"github.com/lib/pq"
)

type Project struct {
	db.BaseModel
	OwnerID     uuid.UUID
	Name        string         `gorm:"type:varchar(128);not null;"`
	Domain      pq.StringArray `gorm:"type:text[]"`
	Description string         `gorm:"type:varchar(255);"`
}

func (p *Project) GrpcResponse() *pb.Project {
	return &pb.Project{
		Id:          p.ID.String(),
		Name:        p.Name,
		Domain:      p.Domain,
		Description: p.Description,
	}
}

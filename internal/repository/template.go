package repository

import (
	"adfy.io/internal/entity"
	"adfy.io/pkg/db"
)

func NewTemplateRepository(baseRepository db.BaseRepository) *TemplateRepository {
	return &TemplateRepository{
		BaseRepository: baseRepository,
	}
}

type TemplateRepository struct {
	db.BaseRepository
}

// Find All Template
func (r *TemplateRepository) All() ([]entity.Template, error) {
	var templates []entity.Template
	result := r.Orm.Find(&templates)
	return templates, result.Error
}

// Find Template By ID
func (r *TemplateRepository) Find(id string) (entity.Template, error) {
	template := &entity.Template{}
	result := r.Orm.First(&template, "id = ?", id)
	return *template, result.Error
}

// Update Template
func (r *TemplateRepository) Save(template *entity.Template) error {
	result := r.Orm.Save(&template)
	return result.Error
}

// Create Template
func (r *TemplateRepository) Create(template *entity.Template) error {
	result := r.Orm.Create(&template)
	return result.Error
}

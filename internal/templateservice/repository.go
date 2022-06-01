package templateservice

import "adfy.io/pkg/db"

func NewTemplateRepository(orm *db.Orm) *TemplateRepository {
	return &TemplateRepository{
		Orm: orm,
	}
}

type TemplateRepository struct {
	Orm *db.Orm
}

// Find All Template
func (r *TemplateRepository) All() ([]Template, error) {
	var templates []Template
	result := r.Orm.Find(&templates)
	return templates, result.Error
}

// Find Template By ID
func (r *TemplateRepository) Find(id string) (Template, error) {
	template := &Template{}
	result := r.Orm.First(&template, "id = ?", id)
	return *template, result.Error
}

// Update Template
func (r *TemplateRepository) Save(template *Template) error {
	result := r.Orm.Save(&template)
	return result.Error
}

// Create Template
func (r *TemplateRepository) Create(template *Template) error {
	result := r.Orm.Create(&template)
	return result.Error
}

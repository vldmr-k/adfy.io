package projectservice

import "adfy.io/pkg/db"

func NewProjectRepository(orm *db.Orm) *ProjectRepository {
	return &ProjectRepository{
		Orm: orm,
	}
}

type ProjectRepository struct {
	Orm *db.Orm
}

// Find Project By ID
func (u *ProjectRepository) Find(id string) (Project, error) {
	project := &Project{}
	result := u.Orm.First(&project, id)
	return *project, result.Error
}

// Create Project
func (u *ProjectRepository) Save(project *Project) error {
	result := u.Orm.Save(&project)
	return result.Error
}

// Create Project
func (u *ProjectRepository) Create(project *Project) error {
	result := u.Orm.Create(&project)
	return result.Error
}

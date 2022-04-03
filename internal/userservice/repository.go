package userservice

import "adfy.io/pkg/db"

func NewUserRepository(orm *db.Orm) *UserRepository {
	return &UserRepository{
		Orm: orm,
	}
}

type UserRepository struct {
	Orm *db.Orm
}

// Find User By ID
func (u *UserRepository) Find(id string) (User, error) {
	user := &User{}
	result := u.Orm.First(&user, id)
	return *user, result.Error
}

func (u *UserRepository) FindByEmail(email string) (User, error) {
	user := &User{}
	result := u.Orm.Where("email = ?", email).First(user)
	return *user, result.Error
}

// Create User
func (u *UserRepository) Save(user *User) error {
	result := u.Orm.Save(&user)
	return result.Error
}

// Create User
func (u *UserRepository) Create(user *User) error {
	result := u.Orm.Create(&user)
	return result.Error
}

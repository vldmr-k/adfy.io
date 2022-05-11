// Code generated by dingo; DO NOT EDIT
package kernel

import (
	projectservice "adfy.io/internal/projectservice"
	userservice "adfy.io/internal/userservice"
	config "adfy.io/pkg/config"
	ctx "adfy.io/pkg/ctx"
	db "adfy.io/pkg/db"
	hook "adfy.io/pkg/hook"
	jwt "adfy.io/pkg/jwt"
	secure "adfy.io/pkg/secure"
	project "adfy.io/rpc/project"
	user "adfy.io/rpc/user"
	"os"
)

type Container struct {
	AuthContext		*ctx.AuthContext
	Config			*config.Config
	Db			*db.Db
	JWT			*jwt.JWT
	Orm			*db.Orm
	ProjectFactory		*projectservice.ProjectFactory
	ProjectRepository	*projectservice.ProjectRepository
	ProjectService		*projectservice.ProjectService
	ProjectServiceServer	*project.TwirpServer
	Secure			*secure.Secure
	UserRepository		*userservice.UserRepository
	UserService		*userservice.UserService
	UserServiceServer	*user.TwirpServer
	VerifyJWTHook		*hook.VerifyJWTHook
}

var DefaultContainer = NewContainer()

func NewContainer() *Container {
	return &Container{}
}
func (container *Container) GetAuthContext() *ctx.AuthContext {
	if container.AuthContext == nil {
		service := ctx.NewAuthContext()
		container.AuthContext = service
	}
	return container.AuthContext
}
func (container *Container) GetConfig() *config.Config {
	if container.Config == nil {
		service := config.NewConfig(os.Getenv("CONFIG_PATH"))
		container.Config = service
	}
	return container.Config
}
func (container *Container) GetDb() *db.Db {
	if container.Db == nil {
		service := db.NewDb(container.GetConfig())
		container.Db = service
	}
	return container.Db
}
func (container *Container) GetJWT() *jwt.JWT {
	if container.JWT == nil {
		service := jwt.NewJWT(container.GetConfig())
		container.JWT = service
	}
	return container.JWT
}
func (container *Container) GetOrm() *db.Orm {
	if container.Orm == nil {
		service := db.NewGorm(container.GetDb())
		container.Orm = service
	}
	return container.Orm
}
func (container *Container) GetProjectFactory() *projectservice.ProjectFactory {
	if container.ProjectFactory == nil {
		service := projectservice.NewProjectFactory()
		container.ProjectFactory = service
	}
	return container.ProjectFactory
}
func (container *Container) GetProjectRepository() *projectservice.ProjectRepository {
	if container.ProjectRepository == nil {
		service := projectservice.NewProjectRepository(container.GetOrm(), container.GetAuthContext())
		container.ProjectRepository = service
	}
	return container.ProjectRepository
}
func (container *Container) GetProjectService() *projectservice.ProjectService {
	if container.ProjectService == nil {
		service := projectservice.NewProjectService(container.GetProjectRepository(), container.GetAuthContext(), container.GetProjectFactory())
		container.ProjectService = service
	}
	return container.ProjectService
}
func (container *Container) GetProjectServiceServer() project.TwirpServer {
	if container.ProjectServiceServer == nil {
		service := project.NewProjectServiceServer(container.GetProjectService(), container.GetVerifyJWTHook().WithJWTAuth())
		container.ProjectServiceServer = &service
	}
	return *container.ProjectServiceServer
}
func (container *Container) GetSecure() *secure.Secure {
	if container.Secure == nil {
		service := secure.NewSecure(6)
		container.Secure = service
	}
	return container.Secure
}
func (container *Container) GetUserRepository() *userservice.UserRepository {
	if container.UserRepository == nil {
		service := userservice.NewUserRepository(container.GetOrm())
		container.UserRepository = service
	}
	return container.UserRepository
}
func (container *Container) GetUserService() *userservice.UserService {
	if container.UserService == nil {
		service := userservice.NewUserService(container.GetJWT(), container.GetSecure(), container.GetUserRepository(), container.GetAuthContext())
		container.UserService = service
	}
	return container.UserService
}
func (container *Container) GetUserServiceServer() user.TwirpServer {
	if container.UserServiceServer == nil {
		service := user.NewUserServiceServer(container.GetUserService(), container.GetVerifyJWTHook().WithJWTAuth("SignIn", "SignUp"))
		container.UserServiceServer = &service
	}
	return *container.UserServiceServer
}
func (container *Container) GetVerifyJWTHook() *hook.VerifyJWTHook {
	if container.VerifyJWTHook == nil {
		service := hook.NewVerifyJWTHook(container.GetJWT())
		container.VerifyJWTHook = service
	}
	return container.VerifyJWTHook
}

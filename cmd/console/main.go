package console

import (
	"context"
	"fmt"
	"log"

	"adfy.io/internal/entity"
	"adfy.io/internal/repository"
	"adfy.io/pkg/db"
	pkgsecure "adfy.io/pkg/secure"
	"github.com/cristalhq/acmd"
)

type AdfyCommand struct {
	acmd.Command
}

func NewUserCommand(userRepository *repository.UserRepository, secure *pkgsecure.Secure) AdfyCommand {
	return AdfyCommand{
		acmd.Command{
			Name:        "user",
			Description: "Create User: {name} {email} {password}",
			Do: func(ctx context.Context, args []string) error {
				user := &entity.User{
					Name:              args[0],
					Email:             args[1],
					EncryptedPassword: secure.Hash(args[2]),
				}
				err := userRepository.Create(user)
				if err != nil {
					return err
				}
				fmt.Printf("User %s created!", user.ID)
				return nil
			},
		},
	}
}

func NewMigrateCommand(orm *db.Orm) AdfyCommand {
	return AdfyCommand{
		acmd.Command{
			Name:        "migrate",
			Description: "Migrate",
			Do: func(ctx context.Context, args []string) error {
				err := orm.AutoMigrate(
					&entity.User{},
					&entity.Project{},
					&entity.Area{},
					&entity.Template{},
					&entity.Placement{},
					&entity.Media{},
				)

				if err != nil {
					log.Fatal(err)
				}

				fmt.Println("Done!")
				return nil
			},
		},
	}
}

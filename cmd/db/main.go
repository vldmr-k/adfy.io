package main

import (
	"fmt"
	"os"

	"adfy.io/internal/entity"
	"adfy.io/internal/kernel"
)

func main() {

	di := kernel.DefaultContainer
	fmt.Print(os.Getenv("CONFIG_PATH"))
	orm := di.GetOrm()

	extension := `
		CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
	`

	err := orm.DB.Exec(extension)

	if err.Error != nil {
		panic(err)
	}

	orm.AutoMigrate(&entity.User{})
	orm.AutoMigrate(&entity.Project{})
	orm.AutoMigrate(&entity.Area{})
	orm.AutoMigrate(&entity.Template{})
	orm.AutoMigrate(&entity.Placement{})
	orm.AutoMigrate(&entity.Media{})

	fmt.Println("Done!")
}

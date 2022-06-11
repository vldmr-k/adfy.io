package main

import (
	"fmt"
	"os"

	"adfy.io/internal/areaservice"
	"adfy.io/internal/kernel"
	"adfy.io/internal/mediaservice"
	"adfy.io/internal/placementservice"
	"adfy.io/internal/projectservice"
	"adfy.io/internal/templateservice"
	"adfy.io/internal/userservice"
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

	orm.AutoMigrate(&userservice.User{})
	orm.AutoMigrate(&projectservice.Project{})
	orm.AutoMigrate(&areaservice.Area{})
	orm.AutoMigrate(&areaservice.Area{})
	orm.AutoMigrate(&templateservice.Template{})
	orm.AutoMigrate(&placementservice.Placement{})
	orm.AutoMigrate(&mediaservice.Media{})

	fmt.Println("Done!")
}

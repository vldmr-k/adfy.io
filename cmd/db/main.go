package main

import (
	"fmt"

	"adfy.io/internal/kernel"
	"adfy.io/internal/projectservice"
	"adfy.io/internal/userservice"
)

func main() {
	orm := kernel.DefaultContainer.GetOrm()

	extension := `
		CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
	`

	err := orm.DB.Exec(extension)

	if err.Error != nil {
		panic(err)
	}

	orm.AutoMigrate(&userservice.User{})
	orm.AutoMigrate(&projectservice.User{})
	fmt.Println("Done!")
}

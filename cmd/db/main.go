package main

import (
	"fmt"
	"log"
	"os"

	"adfy.io/internal/entity"
	"adfy.io/internal/kernel"
)

func main() {

	di := kernel.DefaultContainer
	fmt.Print(os.Getenv("CONFIG_PATH"))
	orm := di.GetOrm()
	db := di.GetDb()

	if err := db.Ping(); err != nil {
		panic(err)
	}

	err := orm.AutoMigrate(
		&entity.User{},
		&entity.Project{},
		&entity.Area{},
		&entity.Template{},
		&entity.Placement{},
		&entity.Media{},
	)

	if err != nil {
		log.Panic(err)
	}
	fmt.Println("Done!")
}

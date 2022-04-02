package db

import (
	"adfy.io/internal/kernel"
	"adfy.io/internal/userservice"
)

func main() {
	c := kernel.DefaultContainer.GetOrm()
	c.AutoMigrate(userservice.User{})
}

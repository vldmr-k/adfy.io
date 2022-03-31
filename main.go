package main

import (
	"fmt"

	"adfy.com/internal/kernel"
)

func main() {
	fmt.Print(kernel.Cfg.Database.Host)
}

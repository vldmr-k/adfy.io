package main

import (
	"adfy.io/internal/kernel"
	"github.com/cristalhq/acmd"
	"os"
)

func main() {
	di := kernel.DefaultContainer

	var cmds []acmd.Command

	cmds = append(cmds, di.GetMigrateCommand().Command)
	cmds = append(cmds, di.GetUserCommand().Command)

	// all the acmd.Config fields are optional
	r := acmd.RunnerOf(cmds, acmd.Config{
		AppName:        "adfy.io",
		AppDescription: "Adfy.io",
		Version:        "the best v0.x.y",
		Args:           os.Args,
		// Context - if nil `signal.Notify` will be used
		// Args - if nil `os.Args[1:]` will be used
		// Usage - if nil default print will be used
	})

	if err := r.Run(); err != nil {
		r.Exit(err)
	}
}

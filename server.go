package main

import (
	"gopkg.in/macaron.v1"
	"web-vfs/server/router"
)

func main() {
	m := macaron.Classic()
	m.Use(macaron.Renderer(macaron.RenderOptions{
		Directory: "server/templates",
	}))

	m.Get("/", router.GoHome)

	m.Run()
}

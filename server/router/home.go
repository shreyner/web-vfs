package router

import "gopkg.in/macaron.v1"

func GoHome(ctx *macaron.Context)  {
	ctx.HTML(200, "home")
}
package server

import (
	"fmt"

	"adfy.io/internal/kernel"

	"github.com/gorilla/mux"

	mw "adfy.io/pkg/mw"
)

func NewServer() (router *mux.Router, addr string) {
	r := mux.NewRouter().StrictSlash(true)

	di := kernel.DefaultContainer

	cfg := di.GetConfig()

	r.Use(mw.AuthContext)
	r.Use(mw.CORS)

	templateHandler := di.GetTemplateHandler()
	//default handler
	r.HandleFunc("/template/render-sample", templateHandler.RenderSample)

	userServiceHandler := di.GetUserTwirpHandler()
	projectServiceHandler := di.GetProjectTwirpHandler()
	templateServiceHandler := di.GetTemplateTwirpHandler()
	mediaServiceHandler := di.GetMediaTwirpHandler()
	areaServiceHandler := di.GetAreaTwirpHandler()

	//twirp handler
	r.PathPrefix(userServiceHandler.PathPrefix()).Handler(userServiceHandler)
	r.PathPrefix(projectServiceHandler.PathPrefix()).Handler(projectServiceHandler)
	r.PathPrefix(templateServiceHandler.PathPrefix()).Handler(templateServiceHandler)
	r.PathPrefix(mediaServiceHandler.PathPrefix()).Handler(mediaServiceHandler)
	r.PathPrefix(areaServiceHandler.PathPrefix()).Handler(areaServiceHandler)

	addr = fmt.Sprintf("%s:%d", cfg.Server.Host, cfg.Server.Port)

	return r, addr
}

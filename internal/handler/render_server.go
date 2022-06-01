package handler

import (
	tmpl "html/template"
	"net/http"
	"strings"

	templateservice "adfy.io/internal/templateservice"
)

type TemplateHandler struct {
	TemplateRepository *templateservice.TemplateRepository
}

func NewTemplateHandler(templateRepository *templateservice.TemplateRepository) *TemplateHandler {
	return &TemplateHandler{
		TemplateRepository: templateRepository,
	}
}

func (t *TemplateHandler) RenderSample(w http.ResponseWriter, r *http.Request) {
	templateId := r.URL.Query().Get("id")

	template, err := t.TemplateRepository.Find(templateId)

	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte(err.Error()))
		return
	}

	w.WriteHeader(http.StatusOK)

	body := tmpl.Must(tmpl.ParseFiles("../../views/template/sample.html"))

	vars := map[string]interface{}{
		"FunctionName": tmpl.JS(strings.ReplaceAll(template.ID.String(), "-", "_")),
		"Component":    tmpl.JS(template.Component),
		"SampleData":   tmpl.JS(template.SampleData),
		"Template":     template,
	}

	body.Execute(w, vars)
}

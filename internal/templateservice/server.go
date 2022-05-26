package templateservice

import (
	"context"

	pkgctx "adfy.io/pkg/ctx"
	pb "adfy.io/rpc/template"
	gprotobuf "github.com/golang/protobuf/ptypes/empty"
	"github.com/twitchtv/twirp"
)

func NewTemplateService(authContext *pkgctx.AuthContext, templateRepository *TemplateRepository, transformer *Transformer) *TemplateService {
	return &TemplateService{
		authContext:        authContext,
		templateRepository: templateRepository,
		transformer:        transformer,
	}
}

type TemplateService struct {
	authContext        *pkgctx.AuthContext
	templateRepository *TemplateRepository
	transformer        *Transformer
}

func (s *TemplateService) Get(ctx context.Context, req *pb.IdRequest) (resp *pb.GetResponse, err error) {
	template, err := s.templateRepository.Find(req.Id)

	if err != nil {
		return nil, err
	}

	return &pb.GetResponse{
		Template: s.transformer.Transofrm(template),
	}, nil
}

func (s *TemplateService) List(ctx context.Context, req *gprotobuf.Empty) (resp *pb.ListResponse, err error) {

	items, err := s.templateRepository.All()

	if err != nil {
		return nil, twirp.InternalError(err.Error())
	}

	var templates []*pb.Template

	for _, item := range items {
		templates = append(templates, s.transformer.Transofrm(item))
	}

	if err != nil {
		return nil, err
	}

	return &pb.ListResponse{Templates: templates}, nil
}

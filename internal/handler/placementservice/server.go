package placementservice

import (
	"adfy.io/internal/factory"
	"adfy.io/internal/repository"
	pkgctx "adfy.io/pkg/ctx"
)

type PlacementService struct {
	placmentRepository *repository.PlacementRepository
	projectRepository  *repository.ProjectRepository
	authContext        *pkgctx.AuthContext
	placementFactory   *factory.PlacementFactory
	transformer        *Transformer
}

func NewPlacementService(
	placementRepository *repository.PlacementRepository,
	projectRepository *repository.ProjectRepository,
	authContext *pkgctx.AuthContext,
	placementFactory *factory.PlacementFactory,
	transformer *Transformer,
) *PlacementService {
	return &PlacementService{
		placmentRepository: placementRepository,
		projectRepository:  projectRepository,
		authContext:        authContext,
		placementFactory:   placementFactory,
		transformer:        transformer,
	}
}

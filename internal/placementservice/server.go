package placementservice

import (
	pkgctx "adfy.io/pkg/ctx"
)

func NewPlacementService(placementRepository *PlacementRepository, authContext *pkgctx.AuthContext, projectFactory *ProjectFactory) *ProjectService {
	return &PlacementService{
		projectRepository: projectRepository,
		authContext:       authContext,
		projectFactory:    projectFactory,
	}
}

type PlacementService struct {
	placmentRepository PlacementRepository
	authContext        pkgctx.AuthContext
	placementFactory   PlacementFactory
}

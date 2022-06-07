package mediaservice

import (
	"context"
	"fmt"

	pkgctx "adfy.io/pkg/ctx"
)

type FileSystem struct {
	AuthContext *pkgctx.AuthContext
}

func NewFileSystem(authContext *pkgctx.AuthContext) *FileSystem {
	return &FileSystem{
		AuthContext: authContext,
	}
}

func (f *FileSystem) BaseDir(ctx context.Context) string {
	usr := f.AuthContext.GetAuthUser(ctx)
	return fmt.Sprintf("/%s", usr.ID)
}

func (f *FileSystem) BaseDirByMedia(ctx context.Context, media Media) string {
	baseDir := f.BaseDir(ctx)
	return fmt.Sprintf("%s/%s", baseDir, media.ID.String())
}

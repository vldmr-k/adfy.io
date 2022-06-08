package mediaservice

import (
	"context"
	"fmt"

	pkgctx "adfy.io/pkg/ctx"
)

type Helper struct {
	AuthContext *pkgctx.AuthContext
}

func NewHelper(authContext *pkgctx.AuthContext) *Helper {
	return &Helper{
		AuthContext: authContext,
	}
}

func (f *Helper) BaseDir(ctx context.Context) string {
	usr := f.AuthContext.GetAuthUser(ctx)
	return fmt.Sprintf("/%s", usr.ID)
}

func (f *Helper) BaseDirByMedia(ctx context.Context, media Media) string {
	baseDir := f.BaseDir(ctx)
	return fmt.Sprintf("%s/%s", baseDir, media.ID.String())
}

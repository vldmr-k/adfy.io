package err

import "github.com/twitchtv/twirp"

// NotFoundError is a convenience constructor for NotFound errors.
func InvalidRequestError(errors map[string]string) twirp.Error {
	err := twirp.NewError(twirp.InvalidArgument, "invalid_request")

	for key, val := range errors {
		err = err.WithMeta(key, val)
	}

	return err
}

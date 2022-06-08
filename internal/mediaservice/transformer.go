package mediaservice

import (
	pb "adfy.io/rpc/media"
)

func NewTransformer() *Transformer {
	return &Transformer{}
}

type Transformer struct{}

func (t *Transformer) Transofrm(media Media) *pb.Media {

	var mediaType pb.Media_MediaType

	if media.Type == MEDIA_TYPE_IMAGE {
		mediaType = pb.Media_IMAGE
	} else if media.Type == MEDIA_TYPE_VIDEO {
		mediaType = pb.Media_VIDEO
	}

	return &pb.Media{
		Id:     media.ID.String(),
		Url:    media.Path,
		Mime:   media.MimeType,
		Size:   int32(media.Size),
		Width:  int32(media.Width),
		Height: int32(media.Width),
		Type:   mediaType,
	}
}

package mediaservice

import (
	"bytes"
	"context"
	"errors"

	pkgs3 "adfy.io/pkg/s3"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
)

type MediaUploader struct {
	s3 pkgs3.S3Client
}

func NewMediaUploader(s3pool *pkgs3.S3ClientPool) *MediaUploader {
	return &MediaUploader{
		s3: s3pool.Media,
	}
}

func (m *MediaUploader) Put(ctx context.Context, path string, body []byte) (location string, err error) {

	if len(path) <= 0 {
		return "", errors.New("Media path must be set")
	}

	uploader := s3manager.NewUploaderWithClient(m.s3.Svc)

	//upload to the s3 bucket
	up, err := uploader.Upload(&s3manager.UploadInput{
		Bucket: aws.String(m.s3.Bucket),
		ACL:    aws.String("public-read"),
		Key:    aws.String(path),
		Body:   bytes.NewReader(body),
	})

	if err != nil {
		return
	}

	return up.Location, nil
}

func (m *MediaUploader) Delete(ctx context.Context, path string) (err error) {

	batcher := s3manager.NewBatchDeleteWithClient(m.s3.Svc)

	objects := []s3manager.BatchDeleteObject{
		{
			Object: &s3.DeleteObjectInput{
				Key:    aws.String("key"),
				Bucket: aws.String("bucket"),
			},
		},
	}

	if err := batcher.Delete(aws.BackgroundContext(), &s3manager.DeleteObjectsIterator{
		Objects: objects,
	}); err != nil {
		return err
	}

	return nil

}

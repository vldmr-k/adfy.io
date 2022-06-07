package s3

import (
	pkg "adfy.io/pkg/config"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

type S3Client struct {
	Svc    *s3.S3
	Bucket string
}

type S3ClientPool struct {
	Media S3Client
}

func NewS3ClientPool(cfg *pkg.Config) *S3ClientPool {
	session, err := session.NewSessionWithOptions(session.Options{
		Profile: "default",
		Config: aws.Config{
			Region:      aws.String(cfg.S3.Client.Region),
			Credentials: credentials.NewStaticCredentials(cfg.S3.Client.Key, cfg.S3.Client.Secret, ""),
		},
	})

	if err != nil {
		panic(err)
	}

	return &S3ClientPool{
		Media: S3Client{s3.New(session), cfg.S3.Client.Bucket},
	}
}

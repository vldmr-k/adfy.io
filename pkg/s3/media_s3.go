package s3

import (
	pkg "adfy.io/pkg/config"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

type S3Client struct {
	Media *s3.S3
}

func NewS3Client(cfg *pkg.Config) *S3Client {
	session, err := session.NewSessionWithOptions(session.Options{
		Profile: "default",
		Config: aws.Config{
			Region:      aws.String(cfg.S3.Client.Bucket),
			Credentials: credentials.NewStaticCredentials(cfg.S3.Client.Key, cfg.S3.Client.Secret, ""),
		},
	})

	if err != nil {
		panic(err)
	}

	return &S3Client{
		Media: s3.New(session),
	}
}

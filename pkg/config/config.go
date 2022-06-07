package config

import (
	"fmt"

	"github.com/spf13/viper"
)

func NewConfig(path string) *Config {

	viper.AddConfigPath(path)
	viper.SetConfigType("yaml")
	err := viper.ReadInConfig()

	if err != nil {
		panic(fmt.Errorf("unable to read config: %s", err))
	}

	var config *Config

	err = viper.Unmarshal(&config)
	if err != nil {
		panic(fmt.Errorf("unable to decode config: %s", err))
	}

	return config
}

type Config struct {
	Server   *Server   `mapstructure:"server"`
	Database *Database `mapstructure:"database"`
	Jwt      *Jwt      `mapstructure:"jwt"`
	S3       *S3       `mapstructure:"s3"`
}

type Server struct {
	Host string `yaml:"host"`
	Port int    `yaml:"port"`
}

type Database struct {
	Username string `yaml:"username"`
	Password string `yaml:"password"`
	Dbname   string `yaml:"dbname"`
	Host     string `yaml:"host"`
	Port     int    `yaml:"port"`
	TimeZone string `yaml:"timezone"`
}

type Jwt struct {
	Secret   string `yaml:"secret"`
	Duration int    `yaml:"duration"`
	Algo     string `yaml:"algo"`
}

type S3 struct {
	Client *S3Client `mapstructure:"client"`
}

type S3Client struct {
	Bucket string `yaml:"bucket"`
	Region string `yaml:"region"`
	Key    string `yaml:"key"`
	Secret string `yaml:"secret"`
}

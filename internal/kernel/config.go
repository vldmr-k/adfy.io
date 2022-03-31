package kernel

import (
	"fmt"

	"github.com/spf13/viper"
)

var Cfg Config

type Config struct {
	Server   *Server   `mapstructure:"server"`
	Database *Database `mapstructure:"database"`
	Jwt      *Jwt      `mapstructure:"jwt"`
}

func init() {
	viper.AddConfigPath("./../..")
	viper.SetConfigType("yaml")
	err := viper.ReadInConfig()

	if err != nil {
		panic(fmt.Errorf("unable to read config: %s", err))
	}

	err = viper.Unmarshal(&Cfg)
	if err != nil {
		panic(fmt.Errorf("unable to decode config: %s", err))
	}
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

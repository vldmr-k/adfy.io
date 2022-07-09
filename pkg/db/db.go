package db

import (
	"database/sql"
	"fmt"

	"adfy.io/pkg/config"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	h "github.com/gadelkareem/go-helpers"
	_ "github.com/lib/pq"
)

type Db struct {
	*sql.DB
}

func NewDb(cfg *config.Config) *Db {
	dsn := dsn(cfg)
	db, err := sql.Open("postgres", dsn)

	h.PanicOnError(err)

	if err := db.Ping(); err != nil {
		panic(err)
	}
	return &Db{db}
}

func dsn(cfg *config.Config) string {
	db := cfg.Database

	return fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%d sslmode=disable TimeZone=%s",
		db.Host,
		db.Username,
		db.Password,
		db.Dbname,
		db.Port,
		db.TimeZone,
	)
}

type Orm struct {
	*gorm.DB
}

func NewGorm(sqlDB *Db) *Orm {

	orm, err := gorm.Open(postgres.New(postgres.Config{
		Conn: sqlDB,
	}), &gorm.Config{
		PrepareStmt: true,
	})

	if err != nil {
		panic(err)
	}

	return &Orm{orm}
}

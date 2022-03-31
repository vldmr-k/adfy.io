package kernel

import (
	"database/sql"
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	h "github.com/gadelkareem/go-helpers"
	_ "github.com/lib/pq"
)

type Db struct {
	*sql.DB
}

func NewDb() *Db {
	dsn := dsn()
	db, err := sql.Open("postgres", dsn)

	h.PanicOnError(err)

	if err := db.Ping(); err != nil {
		panic(err)
	}
	return &Db{db}
}

func dsn() string {
	d := Cfg.Database

	return fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%d sslmode=disable TimeZone=%s",
		d.Host,
		d.Username,
		d.Password,
		d.Dbname,
		d.Port,
		d.TimeZone,
	)
}

type Orm struct {
	*gorm.DB
}

func NewGorm(sqlDB *Db) *Orm {

	orm, err := gorm.Open(postgres.New(postgres.Config{
		Conn: sqlDB,
	}), &gorm.Config{})

	if err != nil {
		panic(err)
	}

	return &Orm{orm}
}

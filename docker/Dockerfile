FROM golang:latest

ENV CGO_ENABLED 0

RUN curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin

# Compile Delve
RUN go install github.com/go-delve/delve/cmd/dlv@master

RUN mkdir /go/src/adfy.io
ADD . /go/src/adfy.io
WORKDIR /go/src/adfy.io


EXPOSE 4080 2345

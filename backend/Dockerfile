# use golang 1.23
FROM golang:1.23 AS build

# create a directory for the app
RUN mkdir /app
ADD . /app/
WORKDIR /app

# download dependencies
RUN go mod download

# build the app
RUN go build .

# final stage
CMD ["/app/realtime-chat-project"]

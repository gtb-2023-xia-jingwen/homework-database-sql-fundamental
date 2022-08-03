#!/bin/bash

export UID

mkdir -p ./data

[[ ! -d ./init-sql ]] &&  echo "Please run generate-database-sql.sh first" && exit 1

docker-compose up -d

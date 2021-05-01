all: clean build deploy

build: 
	cd infra && docker-compose build

deploy: 
	cd infra && docker-compose up -d

clean:
	cd infra && docker-compose down

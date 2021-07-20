# Comment this lien In case of using docker
alias docker=podman

docker build -f docker/Dockerfile -t logger-service:latest .
# docker build -f docker/Dockerfile -t logger-service:latest . --build-arg HTTPS=1

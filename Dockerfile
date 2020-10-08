# use latest version of nodejs
FROM node:alpine AS builder

# set working directory to app
# henceforth all commands will run inside this folder
WORKDIR /app

# copy the rest of the files and folders & install dependencies
COPY . ./
RUN npm install && npm install aurelia-cli -g && au build --env prod

FROM nginx:alpine

COPY --from=builder /app/scripts/* /usr/share/nginx/html/scripts/
COPY --from=builder /app/index.html /usr/share/nginx/html/

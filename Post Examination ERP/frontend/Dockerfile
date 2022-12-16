FROM node:16-alpine as build

# install node-prune (https://github.com/tj/node-prune)
RUN apk update && apk add curl bash
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm ci --silent
RUN /usr/local/bin/node-prune
COPY . .
RUN npm run build

# Multistage build
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

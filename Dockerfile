FROM registry.yandex.net/toolbox/nodejs:10-bionic

COPY build /app
COPY node_modules /app/node_modules
COPY package.json /app/package.json

WORKDIR /app

CMD ["node", "."]

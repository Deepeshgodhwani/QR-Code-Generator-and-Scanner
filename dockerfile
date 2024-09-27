FROM node:18.16.1 as node

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build
FROM nginx:1.15

COPY --from=node /app/build /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000

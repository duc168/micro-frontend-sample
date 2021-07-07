FROM node:14.16.0 as build-stage
WORKDIR /app
COPY ./ /app/

RUN yarn

RUN yarn prod

FROM nginx:stable-alpine
RUN mkdir /usr/share/nginx/html
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

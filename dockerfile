# Stage 1
FROM node:lts-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2
FROM nginx:stable-alpine
RUN rm -frv /usr/share/nginx/html/*
COPY --from=build /app/dist/angular-solution-app /usr/share/nginx/html
EXPOSE 80
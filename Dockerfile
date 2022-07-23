FROM node:lts AS builder

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx:alpine

# Setup nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Move built files to serve through nginx
COPY --from=builder /app/dist /usr/share/nginx/html

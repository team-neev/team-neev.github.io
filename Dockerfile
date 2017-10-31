FROM smebberson/alpine-nginx-nodejs:latest

RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

COPY . /usr/html

EXPOSE 80

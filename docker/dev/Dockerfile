FROM smebberson/alpine-nginx-nodejs:latest

RUN cd $(npm root -g)/npm && \
    npm install fs-extra && \
    sed -i -e s/graceful-fs/fs-extra/ -e s/fs.rename/fs.move/ ./lib/utils/rename.js && \
    npm install -g npm && \
    cd ~/

RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

COPY . /usr/html

WORKDIR /usr/html

RUN npm install

EXPOSE 3000

CMD ["/usr/bin/npm", "run", "server"]
# Team Neev Website

## Requirements

- Docker
- Docker-Compose

## Development

Uses Node and Webpack. Change files in the `src/` folder and the website content will be automatically generated
 on-the-fly (stored in memory) and served using Websockets and a ~~Express~~ Webpack-Dev server. The page will refresh
 automatically on every change, no need to manually reload it.

```
$ docker-compose build dev
$ docker-compose up -d dev
```

The website is available at [http://localhost:3000](http://localhost:3000).

## Production

To take a peek at what the production website looks like:

```
$ docker-compose build website
$ docker-compose up -d website
```

Now go to [http://localhost:80](http://localhost:80).

To rebuild the index.html and assets do:

```
$ ./scripts/build.sh
```

Website contents are now available in the `dist` folder. These can be published to GitHub pages or any Web server.




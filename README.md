# Team Neev Website

## Requirements

- Docker

## Development

Uses Node and Webpack. Change files in the `src/` folder and the website content will be automatically generated
 on-the-fly (stored in memory) and served using Websockets and a ~~Express~~ Webpack-Dev server. The page will refresh
 automatically on every change, no need to manually reload it.

```
$ ./scripts/run.sh build-dev
$ ./scripts/run.sh start-dev
```

The website is available at [http://localhost:3000](http://localhost:3000).

## Production

To build the production version run:

```
$ ./scripts/run.sh build-prod
```

Website contents are now available in the `dist` folder. These can be published to GitHub pages or any Web server.

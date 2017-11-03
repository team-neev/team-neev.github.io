const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('../../webpack/common.js');
const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);

const server = new webpackDevServer(compiler, options);

server.listen(3000, '0.0.0.0', () => {
    console.log('dev server listening on port 3000');
});
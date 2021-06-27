import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack'

const app = express();
dotenv.config();

const { ENV, PORT } = process.env;

if (ENV === 'development') {
    console.log('development config');
    const webpackConfig = require('../../webpack.config.js');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const serverConfig = { port: PORT, hot: true };

    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
    res.json({ hello: 'Hola mundo' });
});

app.listen(PORT, (err) => {
    if (err) console.error(err);
    else console.log('Server on port 3000');
})
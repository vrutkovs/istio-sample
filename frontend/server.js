const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const fetch = require("node-fetch");
const app = express();

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

app.use(
  webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  })
);

app.get('/hello', function(req, res) {
  fetch('http://backend:8080/stranger')
  .then(function(response) {
    var json = response.json();
    console.log("Success - " + json);
    return json;
  }).then(function(json) {
    msg = json.message;
    console.log("msg - " + msg);
    res.send(msg);
  }).catch(function(err) {
    console.log("Error " + err);
    res.sendStatus(500);
  })
})

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

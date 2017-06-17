/* Requires and configuration */

//express
var app = require('express')();
var http = require('http').Server(app);

//socket.io
var io = require('socket.io')(http);
var socketFunctions = require("./server/socketFunctions");

socketFunctions(io);

//webpack
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHot = require("webpack-hot-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/dist/"
}));

app.use(webpackHot(compiler));


/* Server endpoints */

//index
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

/* Start server */

http.listen(3000, function () {
  console.log("Listening on port 3000!");
});


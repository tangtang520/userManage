var express = require('express');
var http = require('http');
var path = require('path');
var request = require('request');
var crypto = require('crypto');
var later = require('later');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes');
var users = require('./routes/user');
var adminRoutes = require('./routes/adminRoutes');
var interface = require('./routes/interface');
var app = express();
var log4js = require('log4js');
//引用获取图片
var GetImage = require('./bin/login/getImage');
app.set('port', process.env.PORT || 3000);
app.use(express.cookieParser());
app.use(express.session({secret: '1ebe1425ffd78fa360b1d26314670d34', cookie: { httpOnly: true,maxAge: 100 * 100 * 100000 }}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use('/output',express.static(path.join(__dirname, 'output')));
app.use('/haveFile',express.static(path.join(__dirname, 'haveFile')));
app.all('/',adminRoutes.index);
app.all('/page', adminRoutes.action);
app.all('/interface',interface.action);
app.all('/getImage',GetImage.getImage);
module.exports = app;
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});



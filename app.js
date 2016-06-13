var express = require('express');
var app = express();
var os 	= require('os');
var routes 	= require('./routes');
var user = require('./routes/user');
var remove 	= require("remove").removeSync;
var engine 	= require('ejs-locals');
var http 	= require('http');
var path = require('path');
var socketio = require("socket.io");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookie	= require('cookie');
//login session
var session = require('express-session');

//ar authentication		= require(path.join(__dirname, './custom_module/authentication.js'));
//var system_event		= require(path.join(__dirname, './event_module/events_module.js'));
//var dbdir				= path.join(__dirname, "/database");
var logger= require('morgan');
var winston = require('winston');
app.use(logger); //replaces your app.use(express.logger());


app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.engine('ejs', engine);
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
//app.use(express.bodyParser( {uploadDir:__dirname+'/image'} ));
//app.use(express.cookieParser());

app.use(express.static(__dirname + '/public'));
/*
app.use(session({
	// 설정
	store : module.exports.sessionStore,
	key : 'sik', // 세션키
	secret : 'keyboardpass', // 비밀키
	cookie : {
		maxAge : 1000 * 60 * 60 * 24 * 365 * 200, // 200년
	},
	saveUninitialized : true,
	resave : false
}));

app.use(express.methodOverride());
app.use(app.router);
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
*/

app.get('/', routes.index);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
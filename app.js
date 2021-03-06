var express = require('express');
var app = require('express')();
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



var session = require('express-session'); //login session


//var dbdir				= path.join(__dirname, "/database");
var morgan = require("morgan");
var winston = require('winston');

app.use(morgan('dev'));  // 4.X 버전에서는 morgan을 사용해야 함. logger와 같은 역할.


app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.engine('ejs', engine);
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(bodyParser());
app.use(cookieParser());
//app.use(app.router); //**this line will be removed**
app.use(express.static(__dirname + '/public'));

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
/*
app.use(express.methodOverride());

app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
*/

app.get('/', routes.index);
app.get('/index', routes.index);






//socket


var server = require('http').Server(app);




/*
server.listen(5000, function(){ 
	console.log('server port: ' + app.get('port'));
});
*/

server.listen(app.get('port'), function() {
  console.log('server port: ' + app.get('port'));
});

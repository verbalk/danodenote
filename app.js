var express = require('express');
var routes = require('./routes');
var cool = require('cool-ascii-faces');
var socketio = require("socket.io");
var remove 	= require("remove").removeSync;
var engine 	= require('ejs-locals');
var cookieParser = require('cookie-parser');
var cookie	= require('cookie');
//login session
var session = require('express-session');
var path = require('path');




var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
app.use(express.cookieParser());
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

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', authentication.isLogin, routes.index);
app.get('/index', authentication.isLogin, routes.index);
app.get('/login', authentication.isLogout, routes.login);

app.post('/login_user', authentication.isLogout, user.login_user);
app.get('/logout_user', authentication.isLogin, user.logout_user);


/*
app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/cool', function(request, response) {
  response.send(cool());
});
*/
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
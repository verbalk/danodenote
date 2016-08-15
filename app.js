var express = require('express');
var app = require('express')();
var os 	= require('os');
var routes 	= require('./routes');
var user = require('./routes/user');
var remove 	= require("remove").removeSync;
var engine 	= require('ejs-locals');
var http 	= require('http');
var path = require('path');
var bodyParser = require('body-parser');



var session = require('express-session'); //login session


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


/*
app.use(express.methodOverride());

app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
*/

app.get('/', routes.index);



/*
server.listen(5000, function(){ 
	console.log('server port: ' + app.get('port'));
});
*/

server.listen(app.get('port'), function() {
  console.log('server port: ' + app.get('port'));
});



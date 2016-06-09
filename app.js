var express = require('express');
var routes 	= require('./routes');
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
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('ejs', engine);


app.use(express.static(__dirname + '/public'));
//app.use(express.cookieParser());
// views is directory for all template files



app.get('/', routes.index);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
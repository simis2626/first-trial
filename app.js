
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');




var routes = require('./routes/index');
var users = require('./routes/users');
var upload = require ('./routes/upload');
var api = require('./routes/api');
var dbc = require('./routes/dbconnect');
var gridfslist = require('./routes/gridfslist');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use('/node_modules', express.static(__dirname + '/node_modules'));//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/dbstart', dbc);
app.use('/', routes);
app.use('/users', users);
app.use('/upload',upload);
app.use('/gridfslist',gridfslist);
app.use('/api', api);

app.get('/marketing-app*', function (req, res) {

  res.sendFile(__dirname + '/public/app.html');


});

app.use('/systemjs.config.js', function (req, res) {

  res.sendFile(__dirname + '/systemjs.config.js');

});
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/app', express.static(__dirname + '/marketing-app'));
app.use('/messaging', express.static(__dirname + '/messaging'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

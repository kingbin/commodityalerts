var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var user = require('./routes/users');
var commodity = require('./routes/commodities');

var app = express();

var auth = require('./routes/auth.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

/*
 * Routes that can be accessed by any one
 */
app.use('/', routes);

app.post('/login', auth.login);

// Only the requests that start with /api/v1/* will be checked for the token.
app.all('/api/v1/*', [require('./middlewares/validateRequest')]);

/*
 * Routes that can be accessed only by autheticated users
 */
app.get('/api/v1/commodities', commodity.getAll);
app.get('/api/v1/commodity/:id', commodity.getOne);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */
app.get('/api/v1/admin/users', user.getAll);
app.get('/api/v1/admin/user/:id', user.getOne);
app.post('/api/v1/admin/user/', user.create);
app.put('/api/v1/admin/user/:id', user.update);
app.delete('/api/v1/admin/user/:id', user.delete);

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
      title: 'commodity alerts',
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
    title: 'commodity alerts',
    message: err.message,
    error: {}
  });
});


module.exports = app;
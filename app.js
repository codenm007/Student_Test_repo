var createError = require('http-errors');
var express = require('express');
const parser = require("body-parser");
const cors = require('cors');
const helmet = require("helmet");
var app = express();

// using plugins
app.use(helmet());
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }))
 
// parse application/json
app.use(parser.json())

// view engine setup


// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

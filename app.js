process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var express = require('./config/express');
require('./config/mongoose');
var passport = require('./config/passport');

var app = express();

var index = require('./routes/index');
var users = require('./routes/users');

app.use('/', index);
app.use('/users', users);

var error = require('./config/error_handler');

error(app)

module.exports = app;

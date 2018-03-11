var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')

var index = require('./routes/index');
var games = require('./routes/games');
var player = require('./routes/player');
var contact = require('./routes/contact');
var users = require('./routes/users');
var news = require('./routes/news-letter');
var checkConnection = require('./routes/checkconnection');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

console.log("*********** NODE ENV IS ***************\n" +
            "*********** "+ process.env.NODE_ENV + " ************");
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
if(process.env.NODE_ENV == 'dev') {
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(favicon(path.join(__dirname, 'public', 'images', 'app', 'pacman_1_.ico')));
}
else{
    app.use(express.static(path.join(__dirname, 'dist')));
    app.use(favicon(path.join(__dirname, 'dist', 'images', 'app', 'pacman_1_.ico')));
}
app.use(cors());


app.use('/', index);
app.use('/games', games);
app.use('/player', player);
app.use('/contact', contact);
app.use('/news', news);
app.use('/users', users);
app.use('/checkconnection', checkConnection);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

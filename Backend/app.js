var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const connectDB = require('./config/mongo');

// connectDB();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const detailRouter = require('./routes/Details');
const contactRouter = require('./routes/Conatcts');

var app = express();

// ✅ Proper CORS setup (manual to handle credentials + multiple origins)
const allowedOrigins = [
  "https://ootytours.netlify.app",
  "http://localhost:3000"
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ✅ API Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/details', detailRouter);
app.use('/contact', contactRouter);

// ✅ Handle 404
app.use(function (req, res, next) {
  next(createError(404));
});

// ✅ Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

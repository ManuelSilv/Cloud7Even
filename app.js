const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const logger = require('morgan'); 
const mongo = require('mongodb')
const mongoose = require("mongoose");
const hbs = require("hbs");
const app = express();

const webAudio = require('web-audio-api');
// const formidable = require('formidable');
// const http = require('http');
// const fs = require('fs');

const multer = require('multer');


// const wavesurfer = require('wavesurfer');
// const bootstrap = require('bootstrap');
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// configuring express session
var session = require('express-session')
const Mongostore = require("connect-mongo")(session)


//jquery window
// require("jsdom").env("", function(err, window) {
//   if (err) {
//       console.error(err);
//       return;
//   }

//   var $ = require("jquery")(window);
// });

// sesssions
app.use(session({
  secret: "some-secret-session",
  cookie: {maxAge: 60000},
  store: new Mongostore({
    mongooseConnection: mongoose.connection, 
    ttl: 24 * 60 * 60
  })
}))
// end configuring express session

// Connection to the database "recipeApp".
mongoose.connect('mongodb://localhost/cloudSeven', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// set up middleware
// these will always run before every request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// defining custom route protection middleware
let protectRoute = function(req, res, next) {
  if(req.session.user) next();
  else res.redirect("/views/login")
}
var indexRouter = require('./routes/index');
// var userRouter = require('./routes/user');
var projectRouter = require("./routes/project");
var mpcRouter = require('./routes/mpc');
var mpc2Router = require('./routes/mpc2');
var editMpcRouter = require('./routes/editMpc');
var compressorRouter = require('./routes/compressor');
// var waveSurferRouter = require('./routes/wavesurfer');
var loginRouter = require('./routes/auth/auth-routes');
var signupRouter = require('./routes/auth/auth-routes');
var uploadformRouter = require('./routes/uploadform');
const profile = require('./routes/profile')

// var httpRouter = require('http');
// var formidableRouter = require('formidable');
// var fsRouter = require('fs');
// var httpRouter= require('http');
// app.use(app.router);
// routes.initialize(app);
// app.use('/userRouter');
// app.use('/http', httpRouter);
// app.use('/formidable', formidableRouter);
// app.use('/user', userRouter);
// app.use('/fs', fsRouter);
app.use('/project', projectRouter);
app.use('/', mpcRouter );
app.use('/', mpc2Router);
app.use('/', editMpcRouter);
app.use('/', indexRouter);
app.use('/', uploadformRouter);
app.use("/", profile);
app.use('/', compressorRouter);
// app.use('/', waveSurferRouter);

// auth routes
app.use('/', loginRouter);
app.use('/', signupRouter);
app.use("/auth", require("./routes/auth/auth-routes"));

// attaching session data to res.locals, 
// making it available to all hbs files after this middleware
app.use(function(req,res,next) {
  if(req.session.user) res.locals.user = req.session.user;
  next();
})

// catch all requests that are neither part of userRouter
// booksRouter nor indexRouter
app.use(function(req, res, next) {
  next({message: "Page not found.", status: 404});
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

app.listen(3000, () =>{
  console.log("It's 3000 bay!")
  });

  // db.createCollection("User", function(err, result) {
  //   if (err) throw err;
  //   console.log("Collection is created!");
  // });

module.exports = app;
// module.exports = router;
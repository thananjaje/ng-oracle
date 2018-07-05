var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
// var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');

// var jwt = require('jsonwebtoken');
var config = require('./config');

// var userController = require('./controllers/userController.js');
// var projectController = require('./controllers/projectController.js');
// var taskController = require('./controllers/taskController.js');
// var FPTController = require('./controllers/FPTController.js');

var port = process.env.PORT || config.serverport;

// mongoose.connect(
//   config.database,
//   function(err) {
//     if (err) {
//       console.log(
//         'Error connecting database, please check if MongoDB is running.'
//       );
//     } else {
//       console.log('Connected to database...');
//     }
//   }
// );

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('body-parser').json({ type: '*/*' }));

// use morgan to log REQUESTS to the console
app.use(morgan('dev'));

// Enable CORS from client-side
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'PUT, GET, POST, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// basic routes
app.get('/', function(req, res) {
  res.send('PMT API is running at http://localhost:' + port + '/api');
});
// app.post('/signup', userController.signup);

// express router
//var apiRoutes = express.Router();
app.use('', require('./routes/routes'));


// start the server
app.listen(port);
console.log('PMT app is listening at http://localhost:' + port);

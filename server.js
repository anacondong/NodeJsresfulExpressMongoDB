var express = require('express'),
  app = express(),
  port = process.env.PORT || 9999,
  mongoose = require('mongoose'), // connect db
  User = require('./api/models/UserModel'), // module create Collection users
  db = require('./config/db'); //  db property
  bodyParser = require('body-parser'); // json body parse
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(db.url, { useMongoClient: true });

// use json body parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set routes controller
var routes = require('./api/routes/UserRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('User RESTful API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  bodyParser = require('body-parser');

var routes = require('./api/routes/purimonRoutes'); //importing route

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

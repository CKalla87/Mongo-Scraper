//Setting up all the packages used
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var path = require('path');
var favicon = require('serve-favicon');

//Creating the port connection
var PORT = process.env.PORT || 8000;

//Setting up app with express function
var app = express();

//using routes folder to setup route functionality
var routes = require("./routes");

//Setting public route using express
app.use(express.static("public"));

//setting up favicon middleware
app.use(favicon(path.join(__dirname, 'public', 'assets/Images/favicon.ico')));

//Using handlebars with application
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Using bodyParser with application
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Assinging routes to application
app.use(routes);

//Setting up Mongo Database connection
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//Connectiong mongoose to MongoDB
mongoose.connect(MONGODB_URI);

//Setting up port to run application
app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
});
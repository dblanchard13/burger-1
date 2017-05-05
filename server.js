// Load our node packages
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var port = 3000;

var app = express();

// Serve static content from "public" directory within app folder
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars
var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import our routes and give server access to them
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(port);
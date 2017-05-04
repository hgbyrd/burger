var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//not understanding of middleware



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
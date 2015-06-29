var Color = require("./libs/color");
var args = require('minimist')(process.argv.slice(2));
var express = require("express");
var app = express();

app.set("view engine", "jade");
app.set("views", "./views");
app.use(express.static("public"));

var testFileName = "test/style.css";

// Test
var getColorGuardReport = function(filename) {
  var useName = filename;
  if (!filename) {
    useName = testFileName;
  }
  var color = new Color(useName);
  var output = color.inspect();
  return output;
};


app.get('/', function(req, res) {

  var output = getColorGuardReport();

  if (args.filename) {
    console.log("Running a report for " + args.filename + ", check it out on http://localhost:8888");
    output = getColorGuardReport(args.filename);
  }

  output.fileName = args.filename || testFileName;

  res.render("index", output);
});

app.listen(8888);

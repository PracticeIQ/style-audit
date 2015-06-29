var Color = require("./libs/color");
var args = process.argv;
var express = require("express");
var app = express();

app.set("view engine", "jade");
app.set("views", "./views");
app.use(express.static("public"));

var testFileName = "test/style.css";

// Test
var test = function() {
  var color = new Color(testFileName);
  var output = color.inspect();
  return output;
};


app.get('/', function(req, res) {
  var output = test();
  output.fileName = testFileName;
  console.log(output);
  res.render("index", output);
});

app.listen(8888);

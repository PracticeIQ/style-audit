/**
 * @name color
 * @author Tamara Chahine
 * @module color
 * @description This module reports on how close colours are with colorguard
 */

var colorguard = require('colorguard');
var fs = require('fs');

var color = (function() {
  // Takes filename and starts the server from cmd line args (global module)
  var module = function(fileName) {
    this.fileName = fileName;
  };

  module.prototype = {
    inspect: function() {
      var fileName = this.fileName;
      var css = fs.readFileSync(this.fileName, "utf8");
      var output = colorguard.inspect(css, {
        threshold: 3
      });
      return output;
    }
  };

  return module;
}());

module.exports = color;

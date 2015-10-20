
var Menu = require("./menu.js")
var Task = require("./task");
var Category = require("./category");

module.exports = function () {
  var menu = Menu(function (wr) {
    div.empty()
      .append(menu)
      .append(Category(wr))
      .append(Task(wr));
  });
  var div = $("<div>").addClass("taskator");
  return div;
};

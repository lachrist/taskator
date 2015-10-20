
var WebRecall = require("web-recall");
var Sorter = require("./sorter.js");

module.exports = function (wr) {
  var id = wr.get("task-max") || 0;
  var pass = wr.lock("task-max"); 
  return $("<div>")
    .addClass("taskator-task")
    .on("remove", pass.unlock)
    .append($("<button>")
      .html("New task")
      .click(function () {
        pass.set(++id);
        wr.set("task-"+id+"-name", "New Task");
        wr.set("task-"+id+"-priority", 0);
      }))
    .append(Sorter(wr));
}

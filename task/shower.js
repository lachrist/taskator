
var $ = require("jquery");
var WebRecallToolkit = require("web-recall-toolkit");

module.exports = function (wr, id) {

  function paint (color) { div.css("background-color", color || "#FFFFFF") }

  function oncolor (res, old, val) { paint(val) }

  function oncategory (res, old, val) {
    wr.off(oncolor);
    if (!val)
      return paint(undefined);
    var key = val.replace("-name", "-color")
    paint(wr.get(key))
    wr.on(key, oncolor);
  }

  var timer = WebRecallToolkit.Timer(wr, "task-"+id+"-elapsed", 5)
  var div = $("<div>")
    .addClass("taskator-task-shower")
    .append(timer)
    .append(WebRecallToolkit.Getter(wr, "task-"+id+"-name"))
    .on("remove", function () {
      wr.off(oncategory);
      wr.off(oncolor);
    });

  wr.on("task-"+id+"-category", oncategory);
  oncategory(undefined, undefined, wr.get("task-"+id+"-category"));

  return div;

}

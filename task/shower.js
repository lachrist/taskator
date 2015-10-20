
var $ = require("jquery");
var WebRecallToolkit = require("web-recall-toolkit");
var Editor = require("./editor.js");

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

  function onpriority (res, old, val) {
    if (old === null) {
      timer.show();
      editor.show();
    } else if (val === null) {
      timer.hide();
      editor.hide();
    }
  }

  var timer = WebRecallToolkit.Timer(wr, "task-"+id+"-elapsed", 5)
  var editor = Editor(wr, id)
  var div = $("<div>")
    .addClass("taskator-task-shower")
    .append(WebRecallToolkit.Getter(wr, "task-"+id+"-name"))
    .append(timer)
    .append(editor)
    .on("remove", function () {
      wr.off(oncategory);
      wr.off(oncolor);
      wr.off(onpriority)
    });

  wr.on("task-"+id+"-category", oncategory);
  wr.on("task-"+id+"-priority", onpriority);
  oncategory(undefined, undefined, wr.get("task-"+id+"-category"));
  if (wr.get("task-"+id+"-priority") === null) {
    timer.hide();
    editor.hide();
  }

  return div;

}

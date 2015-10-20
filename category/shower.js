
var Util = require("../util.js");
var WebRecallToolkit = require("web-recall-toolkit");

module.exports = function (wr, id) {
  var acc = 0;
  var div = $("<div>").html("0s");
  function update (res, old, val) {
    console.dir(res);
    if (wr.get("task-"+res[1]+"-category") === "category-"+id+"-name") {
      acc += val-old;
      div.html(Util.dhms(acc));
    }
  }
  wr.on(/task-([0-9]*)-elapsed$/, update)
  return $("<div>")
    .addClass("taskator-category-shower")
    .on("remove", wr.off.bind(wr, update))
    .append(WebRecallToolkit.Setters.String(wr, "category-"+id+"-name"))
    .append(WebRecallToolkit.Setters.Color(wr, "category-"+id+"-color"))
    .append(div);
}

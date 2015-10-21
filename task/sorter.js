
var Shower = require("./shower.js");
var Editor = require("./editor.js");
var WebRecallToolkit = require("web-recall-toolkit");

module.exports = function (wr) {
  return WebRecallToolkit.Sorter(wr, /^task-([0-9]+)-priority$/, function (res) {
    function edit () {
      shower.off("click", edit);
      shower.on("click", done);
      editor.show("blind");
    }
    function done () {
      shower.off("click", done);
      shower.on("click", edit);
      editor.hide("blind");
    }
    var shower = Shower(wr, res[1]).on("click", edit);
    var editor = Editor(wr, res[1]).hide();
    return $("<div>")
      .append(shower)
      .append(editor);
  }).addClass("taskator-task-sorter");
}

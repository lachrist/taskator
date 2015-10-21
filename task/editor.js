
var WebRecallToolkit = require("web-recall-toolkit");

module.exports = function (wr, id) {
  return $("<div>")
    .addClass("taskator-task-editor")
    .append(WebRecallToolkit.Setters.String(wr, "task-"+id+"-name"))
    .append(WebRecallToolkit.Setters.Reference(wr, "task-"+id+"-category", /^category-([0-9]+)-name$/, function (res) {
      return WebRecallToolkit.Getter(wr, res[0]);
    }))
    .append(WebRecallToolkit.Setters.Text(wr, "task-"+id+"-comment"))
}

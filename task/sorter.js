
var Shower = require("./shower.js");
var WebRecallToolkit = require("web-recall-toolkit");

module.exports = function (wr) {

  return WebRecallToolkit.Sorter(wr, /^task-([0-9]+)-priority$/, function (res) {
    return Shower(wr, res[1])
  }).addClass("taskator-task-sorter");

}

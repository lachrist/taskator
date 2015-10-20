
var Shower = require("./shower.js")
var WebRecallToolkit = require("web-recall-toolkit");

module.exports = function (wr) {
  return WebRecallToolkit.Lister(wr, /^category-([0-9]+)-name/, function (res) {
    return Shower(wr, res[1]);
  }).addClass("taskator-category-lister");
}

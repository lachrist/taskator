
var WebRecall = require("web-recall");
var Util = require("./util.js");
var lost = "Loose current data... like forever?!?";

module.exports = function (onload) {
  var wr = null;
  function init (dump) {
    wr = WebRecall("taskator-", dump);
    onload(wr);
  }
  setTimeout(init, 0, null);
  return $("<div>")
    .addClass("taskator-menu")
    .append($("<a>")
      .html("Save")
      .prop("href", "dump.json")
      .click(function () {
        var d = new Date();
        $(this).prop("href", "data:application/json;charset=utf-8,"+encodeURIComponent(wr.dump()));
        $(this).prop("download", Util.yyyymmdd("-"));
      }))
    .append($("<label>")
      .html("Import")
      .append($("<input>")
        .prop("type", "file")
        .change(function (evt) {
          if (confirm(lost)) {
            var reader = new FileReader();
            reader.onload = function (evt) { init(evt.target.result) };
            reader.readAsText(evt.target.files[0]);
          }
        })))
    .append($("<a>")
      .html("Reset")
      .click(function () {
        if (confirm(lost))
          init("{}");
      }))
}
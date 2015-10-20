
var Lister = require("./lister.js");

module.exports = function (wr) {
  var id = wr.get("category-max") || 0;
  var pass = wr.lock("category-max");
  return $("<div>")
    .addClass("taskator-category")
    .on("remove", pass.unlock)
    .append($("<button>")
      .html("New category")
      .click(function () {
        pass.set(++id);
        wr.set("category-"+id+"-name", "New category");
      }))
    .append(Lister(wr));
}

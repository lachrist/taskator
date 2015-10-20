
var WebRecallToolkit = require("web-recall-toolkit");

module.exports = function (wr, id) {

  function edit () {
    button.off("click", edit);
    button.on("click", done);
    button.html("Done");
    setters.name.show();
    setters.category.show();
  }
  
  function done () {
    button.off("click", done);
    button.on("click", edit);
    button.html("Edit");
    setters.name.hide();
    setters.category.hide();
  }
  
  var button = $("<button>");
  
  var setters = {};
  setters.name = WebRecallToolkit.Setters.String(wr, "task-"+id+"-name");
  setters.category = WebRecallToolkit.Setters.Reference(wr, "task-"+id+"-category", /^category-([0-9]+)-name$/, function (res) {
    return WebRecallToolkit.Getter(wr, res[0]);
  });
  
  done();
  
  return $("<div>")
    .addClass("taskator-task-editor")
    .append(button)
    .append(setters.name)
    .append(setters.category);

}


function pad (x) { return ((x<10) ? "0" : "") + x }
exports.yyyymmdd = function (sep) {
  sep = (typeof sep === "string") ? sep : "-"
  var date = new Date();
  return d.getFullYear()+sep+pad(d.getMonth())+sep+pad(d.getDate());
}

var facs = [
  {value: 1*60*60*24, name: "d"},
  {value: 1*60*60,    name: "h"},
  {value: 1*60,       name: "m"},
  {value: 1,          name: "s"}
];
exports.dhms = function (sec) {
  return facs.reduce(function (str, fac) {
    var rest = sec % fac.value;
    var div = (sec-rest) / fac.value;
    sec = rest;
    return div ? (str+div+fac.name) : str;
  }, "") || "0s";
}

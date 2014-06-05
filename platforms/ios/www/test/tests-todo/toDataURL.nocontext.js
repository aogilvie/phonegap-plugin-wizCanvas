_addTest(function(canvas, ctx) {

var canvas2 = document.createElement('canvas');
var data = canvas2.toDataURL();
_assertMatch(data, /^data:image\/png[;,]/, "data", "/^data:image\\/png[;,]/");


});

_addTest(function(canvas, ctx) {

var data = canvas.toDataURL();
_assertMatch(data, /^data:image\/png[;,]/, "data", "/^data:image\\/png[;,]/");


});

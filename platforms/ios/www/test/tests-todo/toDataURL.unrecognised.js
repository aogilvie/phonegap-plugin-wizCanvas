_addTest(function(canvas, ctx) {

var data = canvas.toDataURL('image/example');
_assertMatch(data, /^data:image\/png[;,]/, "data", "/^data:image\\/png[;,]/");


});

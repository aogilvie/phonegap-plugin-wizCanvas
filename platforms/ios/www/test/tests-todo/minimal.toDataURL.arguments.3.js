_addTest(function(canvas, ctx) {

// More arguments that should not raise exceptions
var data = canvas.toDataURL('image/png', null, null, null);
_assertMatch(data, /^data:image\/png[;,]/, "data", "/^data:image\\/png[;,]/");


});

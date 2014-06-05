_addTest(function(canvas, ctx) {

var data = canvas.toDataURL('image/png', 'another argument that should not raise an exception', 'and another');
_assertMatch(data, /^data:image\/png[;,]/, "data", "/^data:image\\/png[;,]/");


});

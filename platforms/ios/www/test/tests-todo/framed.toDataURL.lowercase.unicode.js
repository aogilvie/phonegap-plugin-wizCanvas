_addTest(function(canvas, ctx) {

// Use LATIN CAPITAL LETTER I WITH DOT ABOVE (Unicode lowercase is "i")
var data = canvas.toDataURL('\u0130mage/png');
_assertMatch(data, /^data:image\/png[;,]/, "data", "/^data:image\\/png[;,]/");

var data = canvas.toDataURL('\u0130mage/jpeg');
_assertMatch(data, /^data:image\/png[;,]/, "data", "/^data:image\\/png[;,]/");


});

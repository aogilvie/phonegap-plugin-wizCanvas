_addTest(function(canvas, ctx) {

var data = canvas.toDataURL();
_assertSame(data, 'data:,', "data", "'data:,'");


});

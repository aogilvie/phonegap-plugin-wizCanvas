_addTest(function(canvas, ctx) {

canvas.width = 0;
canvas.height = 0;
_assertSame(canvas.getAttribute('width'), '0', "canvas.getAttribute('width')", "'0'");
_assertSame(canvas.getAttribute('height'), '0', "canvas.getAttribute('height')", "'0'");
_assertSame(canvas.width, 0, "canvas.width", "0");
_assertSame(canvas.height, 0, "canvas.height", "0");


});

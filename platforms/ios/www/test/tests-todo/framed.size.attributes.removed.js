_addTest(function(canvas, ctx) {

_assertSame(canvas.width, 120, "canvas.width", "120");
canvas.removeAttribute('width');
_assertSame(canvas.width, 300, "canvas.width", "300");


});

_addTest(function(canvas, ctx) {

canvas.setAttribute('width', '-100');
canvas.setAttribute('height', '-100');
_assertSame(canvas.width, 300, "canvas.width", "300");
_assertSame(canvas.height, 150, "canvas.height", "150");


});

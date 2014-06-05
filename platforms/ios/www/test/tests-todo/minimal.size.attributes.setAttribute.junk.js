_addTest(function(canvas, ctx) {

canvas.setAttribute('width', '#!?');
canvas.setAttribute('height', '#!?');
_assertSame(canvas.width, 300, "canvas.width", "300");
_assertSame(canvas.height, 150, "canvas.height", "150");


});

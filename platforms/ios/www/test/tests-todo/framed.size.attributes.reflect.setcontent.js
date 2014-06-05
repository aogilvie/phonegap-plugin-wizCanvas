_addTest(function(canvas, ctx) {

canvas.setAttribute('width', '120');
canvas.setAttribute('height', '60');
_assertSame(canvas.getAttribute('width'), '120', "canvas.getAttribute('width')", "'120'");
_assertSame(canvas.getAttribute('height'), '60', "canvas.getAttribute('height')", "'60'");
_assertSame(canvas.width, 120, "canvas.width", "120");
_assertSame(canvas.height, 60, "canvas.height", "60");


});

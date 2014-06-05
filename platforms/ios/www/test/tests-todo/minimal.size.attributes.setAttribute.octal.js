_addTest(function(canvas, ctx) {

canvas.setAttribute('width', '0100');
canvas.setAttribute('height', '0100');
_assertSame(canvas.width, 100, "canvas.width", "100");
_assertSame(canvas.height, 100, "canvas.height", "100");
_assertEqual(window.getComputedStyle(canvas, null).getPropertyValue("width"), "100px", "window.getComputedStyle(canvas, null).getPropertyValue(\"width\")", "\"100px\"");


});

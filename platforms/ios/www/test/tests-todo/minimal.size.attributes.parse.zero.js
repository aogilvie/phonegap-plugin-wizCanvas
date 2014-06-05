_addTest(function(canvas, ctx) {

_assertSame(canvas.width, 0, "canvas.width", "0");
_assertSame(canvas.height, 0, "canvas.height", "0");
_assertEqual(window.getComputedStyle(canvas, null).getPropertyValue("width"), "0px", "window.getComputedStyle(canvas, null).getPropertyValue(\"width\")", "\"0px\"");


});

_addTest(function(canvas, ctx) {

canvas.width = "100";
canvas.height = "100";
_assertSame(canvas.width, 100, "canvas.width", "100");
_assertSame(canvas.height, 100, "canvas.height", "100");

canvas.width = "+1.5e2";
canvas.height = "0x96";
_assertSame(canvas.width, 150, "canvas.width", "150");
_assertSame(canvas.height, 150, "canvas.height", "150");

canvas.width = 200 - Math.pow(2, 32);
canvas.height = 200 - Math.pow(2, 32);
_assertSame(canvas.width, 200, "canvas.width", "200");
_assertSame(canvas.height, 200, "canvas.height", "200");

canvas.width = 301.999;
canvas.height = 301.001;
_assertSame(canvas.width, 301, "canvas.width", "301");
_assertSame(canvas.height, 301, "canvas.height", "301");

canvas.width = "400x";
canvas.height = "foo";
_assertSame(canvas.width, 0, "canvas.width", "0");
_assertSame(canvas.height, 0, "canvas.height", "0");


});

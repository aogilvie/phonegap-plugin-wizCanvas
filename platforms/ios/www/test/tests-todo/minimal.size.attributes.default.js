_addTest(function(canvas, ctx) {

_assertSame(canvas.width, 300, "canvas.width", "300");
_assertSame(canvas.height, 150, "canvas.height", "150");
_assert(!canvas.hasAttribute('width'), "!canvas.hasAttribute('width')");
_assert(!canvas.hasAttribute('height'), "!canvas.hasAttribute('height')");


});

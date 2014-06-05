_addTest(function(canvas, ctx) {

_assertSame(canvas.getContext("2d\0"), null, "canvas.getContext(\"2d\\0\")", "null");


});

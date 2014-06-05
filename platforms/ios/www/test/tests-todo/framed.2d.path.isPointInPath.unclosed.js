_addTest(function(canvas, ctx) {

ctx.moveTo(0, 0);
ctx.lineTo(20, 0);
ctx.lineTo(20, 20);
ctx.lineTo(0, 20);
_assertSame(ctx.isPointInPath(10, 10), true, "ctx.isPointInPath(10, 10)", "true");
_assertSame(ctx.isPointInPath(30, 10), false, "ctx.isPointInPath(30, 10)", "false");


});

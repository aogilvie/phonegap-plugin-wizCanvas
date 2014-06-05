_addTest(function(canvas, ctx) {

ctx.rect(0, 0, 20, 20);
_assertSame(ctx.isPointInPath(10, 10), true, "ctx.isPointInPath(10, 10)", "true");
_assertSame(ctx.isPointInPath(30, 10), false, "ctx.isPointInPath(30, 10)", "false");


});

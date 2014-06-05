_addTest(function(canvas, ctx) {

ctx.rect(20, 0, 20, 20);
_assertSame(ctx.isPointInPath(10, 10), false, "ctx.isPointInPath(10, 10)", "false");
_assertSame(ctx.isPointInPath(30, 10), true, "ctx.isPointInPath(30, 10)", "true");


});

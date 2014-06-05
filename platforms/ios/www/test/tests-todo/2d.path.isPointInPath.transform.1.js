_addTest(function(canvas, ctx) {

ctx.translate(50, 0);
ctx.rect(0, 0, 20, 20);
_assertSame(ctx.isPointInPath(-40, 10), false, "ctx.isPointInPath(-40, 10)", "false");
_assertSame(ctx.isPointInPath(10, 10), false, "ctx.isPointInPath(10, 10)", "false");
_assertSame(ctx.isPointInPath(49, 10), false, "ctx.isPointInPath(49, 10)", "false");
_assertSame(ctx.isPointInPath(51, 10), true, "ctx.isPointInPath(51, 10)", "true");
_assertSame(ctx.isPointInPath(69, 10), true, "ctx.isPointInPath(69, 10)", "true");
_assertSame(ctx.isPointInPath(71, 10), false, "ctx.isPointInPath(71, 10)", "false");


});

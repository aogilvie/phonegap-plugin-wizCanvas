_addTest(function(canvas, ctx) {

ctx.rect(0, 0, 20, 20);
_assertSame(ctx.isPointInPath(0, 0), true, "ctx.isPointInPath(0, 0)", "true");
_assertSame(ctx.isPointInPath(10, 0), true, "ctx.isPointInPath(10, 0)", "true");
_assertSame(ctx.isPointInPath(20, 0), true, "ctx.isPointInPath(20, 0)", "true");
_assertSame(ctx.isPointInPath(20, 10), true, "ctx.isPointInPath(20, 10)", "true");
_assertSame(ctx.isPointInPath(20, 20), true, "ctx.isPointInPath(20, 20)", "true");
_assertSame(ctx.isPointInPath(10, 20), true, "ctx.isPointInPath(10, 20)", "true");
_assertSame(ctx.isPointInPath(0, 20), true, "ctx.isPointInPath(0, 20)", "true");
_assertSame(ctx.isPointInPath(0, 10), true, "ctx.isPointInPath(0, 10)", "true");
_assertSame(ctx.isPointInPath(10, -0.01), false, "ctx.isPointInPath(10, -0.01)", "false");
_assertSame(ctx.isPointInPath(10, 20.01), false, "ctx.isPointInPath(10, 20.01)", "false");
_assertSame(ctx.isPointInPath(-0.01, 10), false, "ctx.isPointInPath(-0.01, 10)", "false");
_assertSame(ctx.isPointInPath(20.01, 10), false, "ctx.isPointInPath(20.01, 10)", "false");


});

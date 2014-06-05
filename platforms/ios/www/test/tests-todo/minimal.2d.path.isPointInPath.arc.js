_addTest(function(canvas, ctx) {

ctx.arc(50, 25, 10, 0, Math.PI, false);
_assertSame(ctx.isPointInPath(50, 10), false, "ctx.isPointInPath(50, 10)", "false");
_assertSame(ctx.isPointInPath(50, 20), false, "ctx.isPointInPath(50, 20)", "false");
_assertSame(ctx.isPointInPath(50, 30), true, "ctx.isPointInPath(50, 30)", "true");
_assertSame(ctx.isPointInPath(50, 40), false, "ctx.isPointInPath(50, 40)", "false");
_assertSame(ctx.isPointInPath(30, 20), false, "ctx.isPointInPath(30, 20)", "false");
_assertSame(ctx.isPointInPath(70, 20), false, "ctx.isPointInPath(70, 20)", "false");
_assertSame(ctx.isPointInPath(30, 30), false, "ctx.isPointInPath(30, 30)", "false");
_assertSame(ctx.isPointInPath(70, 30), false, "ctx.isPointInPath(70, 30)", "false");


});

_addTest(function(canvas, ctx) {

ctx.rect(0, -100, 20, 20);
ctx.rect(20, -10, 20, 20);
_assertSame(ctx.isPointInPath(10, -110), false, "ctx.isPointInPath(10, -110)", "false");
_assertSame(ctx.isPointInPath(10, -90), true, "ctx.isPointInPath(10, -90)", "true");
_assertSame(ctx.isPointInPath(10, -70), false, "ctx.isPointInPath(10, -70)", "false");
_assertSame(ctx.isPointInPath(30, -20), false, "ctx.isPointInPath(30, -20)", "false");
_assertSame(ctx.isPointInPath(30, 0), true, "ctx.isPointInPath(30, 0)", "true");
_assertSame(ctx.isPointInPath(30, 20), false, "ctx.isPointInPath(30, 20)", "false");


});

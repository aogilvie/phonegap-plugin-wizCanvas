_addTest(function(canvas, ctx) {

ctx.rect(-100, -50, 200, 100);
_assertSame(ctx.isPointInPath(Infinity, 0), false, "ctx.isPointInPath(Infinity, 0)", "false");
_assertSame(ctx.isPointInPath(-Infinity, 0), false, "ctx.isPointInPath(-Infinity, 0)", "false");
_assertSame(ctx.isPointInPath(NaN, 0), false, "ctx.isPointInPath(NaN, 0)", "false");
_assertSame(ctx.isPointInPath(0, Infinity), false, "ctx.isPointInPath(0, Infinity)", "false");
_assertSame(ctx.isPointInPath(0, -Infinity), false, "ctx.isPointInPath(0, -Infinity)", "false");
_assertSame(ctx.isPointInPath(0, NaN), false, "ctx.isPointInPath(0, NaN)", "false");
_assertSame(ctx.isPointInPath(NaN, NaN), false, "ctx.isPointInPath(NaN, NaN)", "false");


});

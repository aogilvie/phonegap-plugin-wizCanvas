_addTest(function(canvas, ctx) {

_assertSame(ctx.lineWidth, 1, "ctx.lineWidth", "1");
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");
_assertSame(ctx.lineJoin, 'miter', "ctx.lineJoin", "'miter'");
_assertSame(ctx.miterLimit, 10, "ctx.miterLimit", "10");


});

_addTest(function(canvas, ctx) {

ctx.miterLimit = 1.5;
_assertSame(ctx.miterLimit, 1.5, "ctx.miterLimit", "1.5");

ctx.miterLimit = 1.5;
ctx.miterLimit = 0;
_assertSame(ctx.miterLimit, 1.5, "ctx.miterLimit", "1.5");

ctx.miterLimit = 1.5;
ctx.miterLimit = -1;
_assertSame(ctx.miterLimit, 1.5, "ctx.miterLimit", "1.5");

ctx.miterLimit = 1.5;
ctx.miterLimit = Infinity;
_assertSame(ctx.miterLimit, 1.5, "ctx.miterLimit", "1.5");

ctx.miterLimit = 1.5;
ctx.miterLimit = -Infinity;
_assertSame(ctx.miterLimit, 1.5, "ctx.miterLimit", "1.5");

ctx.miterLimit = 1.5;
ctx.miterLimit = NaN;
_assertSame(ctx.miterLimit, 1.5, "ctx.miterLimit", "1.5");


});

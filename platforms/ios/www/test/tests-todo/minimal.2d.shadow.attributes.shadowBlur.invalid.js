_addTest(function(canvas, ctx) {

ctx.shadowBlur = 1;
ctx.shadowBlur = -2;
_assertSame(ctx.shadowBlur, 1, "ctx.shadowBlur", "1");

ctx.shadowBlur = 1;
ctx.shadowBlur = Infinity;
_assertSame(ctx.shadowBlur, 1, "ctx.shadowBlur", "1");

ctx.shadowBlur = 1;
ctx.shadowBlur = -Infinity;
_assertSame(ctx.shadowBlur, 1, "ctx.shadowBlur", "1");

ctx.shadowBlur = 1;
ctx.shadowBlur = NaN;
_assertSame(ctx.shadowBlur, 1, "ctx.shadowBlur", "1");


});

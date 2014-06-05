_addTest(function(canvas, ctx) {

ctx.shadowBlur = 1;
_assertSame(ctx.shadowBlur, 1, "ctx.shadowBlur", "1");

ctx.shadowBlur = 0.5;
_assertSame(ctx.shadowBlur, 0.5, "ctx.shadowBlur", "0.5");

ctx.shadowBlur = 1e6;
_assertSame(ctx.shadowBlur, 1e6, "ctx.shadowBlur", "1e6");

ctx.shadowBlur = 0;
_assertSame(ctx.shadowBlur, 0, "ctx.shadowBlur", "0");


});

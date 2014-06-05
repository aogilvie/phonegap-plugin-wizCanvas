_addTest(function(canvas, ctx) {

ctx.miterLimit = 1.5;
_assertSame(ctx.miterLimit, 1.5, "ctx.miterLimit", "1.5");

ctx.miterLimit = "1e1";
_assertSame(ctx.miterLimit, 10, "ctx.miterLimit", "10");

ctx.miterLimit = 1/1024;
_assertSame(ctx.miterLimit, 1/1024, "ctx.miterLimit", "1/1024");

ctx.miterLimit = 1000;
_assertSame(ctx.miterLimit, 1000, "ctx.miterLimit", "1000");


});

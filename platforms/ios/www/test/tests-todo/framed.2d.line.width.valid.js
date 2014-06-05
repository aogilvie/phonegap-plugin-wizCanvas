_addTest(function(canvas, ctx) {

ctx.lineWidth = 1.5;
_assertSame(ctx.lineWidth, 1.5, "ctx.lineWidth", "1.5");

ctx.lineWidth = "1e1";
_assertSame(ctx.lineWidth, 10, "ctx.lineWidth", "10");

ctx.lineWidth = 1/1024;
_assertSame(ctx.lineWidth, 1/1024, "ctx.lineWidth", "1/1024");

ctx.lineWidth = 1000;
_assertSame(ctx.lineWidth, 1000, "ctx.lineWidth", "1000");


});

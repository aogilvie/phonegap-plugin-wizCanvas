_addTest(function(canvas, ctx) {

ctx.lineWidth = 1.5;
_assertSame(ctx.lineWidth, 1.5, "ctx.lineWidth", "1.5");

ctx.lineWidth = 1.5;
ctx.lineWidth = 0;
_assertSame(ctx.lineWidth, 1.5, "ctx.lineWidth", "1.5");

ctx.lineWidth = 1.5;
ctx.lineWidth = -1;
_assertSame(ctx.lineWidth, 1.5, "ctx.lineWidth", "1.5");

ctx.lineWidth = 1.5;
ctx.lineWidth = Infinity;
_assertSame(ctx.lineWidth, 1.5, "ctx.lineWidth", "1.5");

ctx.lineWidth = 1.5;
ctx.lineWidth = -Infinity;
_assertSame(ctx.lineWidth, 1.5, "ctx.lineWidth", "1.5");

ctx.lineWidth = 1.5;
ctx.lineWidth = NaN;
_assertSame(ctx.lineWidth, 1.5, "ctx.lineWidth", "1.5");


});

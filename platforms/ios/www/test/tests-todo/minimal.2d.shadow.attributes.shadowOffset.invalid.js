_addTest(function(canvas, ctx) {

ctx.shadowOffsetX = 1;
ctx.shadowOffsetY = 2;
ctx.shadowOffsetX = Infinity;
ctx.shadowOffsetY = Infinity;
_assertSame(ctx.shadowOffsetX, 1, "ctx.shadowOffsetX", "1");
_assertSame(ctx.shadowOffsetY, 2, "ctx.shadowOffsetY", "2");

ctx.shadowOffsetX = 1;
ctx.shadowOffsetY = 2;
ctx.shadowOffsetX = -Infinity;
ctx.shadowOffsetY = -Infinity;
_assertSame(ctx.shadowOffsetX, 1, "ctx.shadowOffsetX", "1");
_assertSame(ctx.shadowOffsetY, 2, "ctx.shadowOffsetY", "2");

ctx.shadowOffsetX = 1;
ctx.shadowOffsetY = 2;
ctx.shadowOffsetX = NaN;
ctx.shadowOffsetY = NaN;
_assertSame(ctx.shadowOffsetX, 1, "ctx.shadowOffsetX", "1");
_assertSame(ctx.shadowOffsetY, 2, "ctx.shadowOffsetY", "2");


});

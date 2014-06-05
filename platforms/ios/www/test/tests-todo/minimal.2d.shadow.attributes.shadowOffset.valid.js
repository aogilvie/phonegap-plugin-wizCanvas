_addTest(function(canvas, ctx) {

ctx.shadowOffsetX = 1;
ctx.shadowOffsetY = 2;
_assertSame(ctx.shadowOffsetX, 1, "ctx.shadowOffsetX", "1");
_assertSame(ctx.shadowOffsetY, 2, "ctx.shadowOffsetY", "2");

ctx.shadowOffsetX = 0.5;
ctx.shadowOffsetY = 0.25;
_assertSame(ctx.shadowOffsetX, 0.5, "ctx.shadowOffsetX", "0.5");
_assertSame(ctx.shadowOffsetY, 0.25, "ctx.shadowOffsetY", "0.25");

ctx.shadowOffsetX = -0.5;
ctx.shadowOffsetY = -0.25;
_assertSame(ctx.shadowOffsetX, -0.5, "ctx.shadowOffsetX", "-0.5");
_assertSame(ctx.shadowOffsetY, -0.25, "ctx.shadowOffsetY", "-0.25");

ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;
_assertSame(ctx.shadowOffsetX, 0, "ctx.shadowOffsetX", "0");
_assertSame(ctx.shadowOffsetY, 0, "ctx.shadowOffsetY", "0");

ctx.shadowOffsetX = 1e6;
ctx.shadowOffsetY = 1e6;
_assertSame(ctx.shadowOffsetX, 1e6, "ctx.shadowOffsetX", "1e6");
_assertSame(ctx.shadowOffsetY, 1e6, "ctx.shadowOffsetY", "1e6");


});

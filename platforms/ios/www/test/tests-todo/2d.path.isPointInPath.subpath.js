_addTest(function(canvas, ctx) {

ctx.rect(0, 0, 20, 20);
ctx.beginPath();
ctx.rect(20, 0, 20, 20);
ctx.closePath();
ctx.rect(40, 0, 20, 20);
_assertSame(ctx.isPointInPath(10, 10), false, "ctx.isPointInPath(10, 10)", "false");
_assertSame(ctx.isPointInPath(30, 10), true, "ctx.isPointInPath(30, 10)", "true");
_assertSame(ctx.isPointInPath(50, 10), true, "ctx.isPointInPath(50, 10)", "true");


});

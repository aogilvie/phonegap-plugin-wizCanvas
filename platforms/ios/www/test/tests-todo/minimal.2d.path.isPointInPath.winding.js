_addTest(function(canvas, ctx) {

// Create a square ring, using opposite windings to make a hole in the centre
ctx.moveTo(0, 0);
ctx.lineTo(50, 0);
ctx.lineTo(50, 50);
ctx.lineTo(0, 50);
ctx.lineTo(0, 0);
ctx.lineTo(10, 10);
ctx.lineTo(10, 40);
ctx.lineTo(40, 40);
ctx.lineTo(40, 10);
ctx.lineTo(10, 10);

_assertSame(ctx.isPointInPath(5, 5), true, "ctx.isPointInPath(5, 5)", "true");
_assertSame(ctx.isPointInPath(25, 5), true, "ctx.isPointInPath(25, 5)", "true");
_assertSame(ctx.isPointInPath(45, 5), true, "ctx.isPointInPath(45, 5)", "true");
_assertSame(ctx.isPointInPath(5, 25), true, "ctx.isPointInPath(5, 25)", "true");
_assertSame(ctx.isPointInPath(25, 25), false, "ctx.isPointInPath(25, 25)", "false");
_assertSame(ctx.isPointInPath(45, 25), true, "ctx.isPointInPath(45, 25)", "true");
_assertSame(ctx.isPointInPath(5, 45), true, "ctx.isPointInPath(5, 45)", "true");
_assertSame(ctx.isPointInPath(25, 45), true, "ctx.isPointInPath(25, 45)", "true");
_assertSame(ctx.isPointInPath(45, 45), true, "ctx.isPointInPath(45, 45)", "true");


});

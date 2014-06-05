_addTest(function(canvas, ctx) {

ctx.lineWidth = 1;
ctx.save();
ctx.lineWidth = 2;
ctx.save();
ctx.lineWidth = 3;
_assertEqual(ctx.lineWidth, 3, "ctx.lineWidth", "3");
ctx.restore();
_assertEqual(ctx.lineWidth, 2, "ctx.lineWidth", "2");
ctx.restore();
_assertEqual(ctx.lineWidth, 1, "ctx.lineWidth", "1");


});

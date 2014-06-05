_addTest(function(canvas, ctx) {

for (var i = 0; i < 16; ++i)
    ctx.restore();
ctx.lineWidth = 0.5;
ctx.restore();
_assertEqual(ctx.lineWidth, 0.5, "ctx.lineWidth", "0.5");


});

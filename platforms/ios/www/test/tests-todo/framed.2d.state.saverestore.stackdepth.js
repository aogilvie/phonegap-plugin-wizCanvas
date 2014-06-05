_addTest(function(canvas, ctx) {

var limit = 512;
for (var i = 1; i < limit; ++i)
{
    ctx.save();
    ctx.lineWidth = i;
}
for (var i = limit-1; i > 0; --i)
{
    _assertEqual(ctx.lineWidth, i, "ctx.lineWidth", "i");
    ctx.restore();
}


});

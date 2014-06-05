_addTest(function(canvas, ctx) {

ctx.lineCap = 'butt'
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");

ctx.lineCap = 'round';
_assertSame(ctx.lineCap, 'round', "ctx.lineCap", "'round'");

ctx.lineCap = 'square';
_assertSame(ctx.lineCap, 'square', "ctx.lineCap", "'square'");


});

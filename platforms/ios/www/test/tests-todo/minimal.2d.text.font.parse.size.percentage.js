_addTest(function(canvas, ctx) {

ctx.font = '50% serif';
_assertSame(ctx.font, '72px serif', "ctx.font", "'72px serif'");
canvas.setAttribute('style', 'font-size: 100px');
_assertSame(ctx.font, '72px serif', "ctx.font", "'72px serif'");


});

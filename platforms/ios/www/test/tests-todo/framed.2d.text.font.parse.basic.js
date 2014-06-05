_addTest(function(canvas, ctx) {

ctx.font = '20px serif';
_assertSame(ctx.font, '20px serif', "ctx.font", "'20px serif'");

ctx.font = '20PX   SERIF';
_assertSame(ctx.font, '20px serif', "ctx.font", "'20px serif'");


});

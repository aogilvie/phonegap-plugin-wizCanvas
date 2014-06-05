_addTest(function(canvas, ctx) {

ctx.font = '20px serif';
_assertSame(ctx.font, '20px serif', "ctx.font", "'20px serif'");

ctx.font = '20px serif';
ctx.font = 'bogus';
_assertSame(ctx.font, '20px serif', "ctx.font", "'20px serif'");

ctx.font = '20px serif';
ctx.font = 'inherit';
_assertSame(ctx.font, '20px serif', "ctx.font", "'20px serif'");

ctx.font = '20px serif';
ctx.font = '10px {bogus}';
_assertSame(ctx.font, '20px serif', "ctx.font", "'20px serif'");

ctx.font = '20px serif';
ctx.font = '10px initial';
_assertSame(ctx.font, '20px serif', "ctx.font", "'20px serif'");

ctx.font = '20px serif';
ctx.font = '10px default';
_assertSame(ctx.font, '20px serif', "ctx.font", "'20px serif'");

ctx.font = '20px serif';
ctx.font = '10px inherit';
_assertSame(ctx.font, '20px serif', "ctx.font", "'20px serif'");


});

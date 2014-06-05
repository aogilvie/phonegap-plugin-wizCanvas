_addTest(function(canvas, ctx) {

ctx.textAlign = 'start';
ctx.textAlign = 'bogus';
_assertSame(ctx.textAlign, 'start', "ctx.textAlign", "'start'");

ctx.textAlign = 'start';
ctx.textAlign = 'END';
_assertSame(ctx.textAlign, 'start', "ctx.textAlign", "'start'");

ctx.textAlign = 'start';
ctx.textAlign = 'end ';
_assertSame(ctx.textAlign, 'start', "ctx.textAlign", "'start'");

ctx.textAlign = 'start';
ctx.textAlign = 'end\0';
_assertSame(ctx.textAlign, 'start', "ctx.textAlign", "'start'");


});

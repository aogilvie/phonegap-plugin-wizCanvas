_addTest(function(canvas, ctx) {

ctx.textAlign = 'start';
_assertSame(ctx.textAlign, 'start', "ctx.textAlign", "'start'");

ctx.textAlign = 'end';
_assertSame(ctx.textAlign, 'end', "ctx.textAlign", "'end'");

ctx.textAlign = 'left';
_assertSame(ctx.textAlign, 'left', "ctx.textAlign", "'left'");

ctx.textAlign = 'right';
_assertSame(ctx.textAlign, 'right', "ctx.textAlign", "'right'");

ctx.textAlign = 'center';
_assertSame(ctx.textAlign, 'center', "ctx.textAlign", "'center'");


});

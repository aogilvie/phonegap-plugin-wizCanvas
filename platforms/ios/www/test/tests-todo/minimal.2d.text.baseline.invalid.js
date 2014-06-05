_addTest(function(canvas, ctx) {

ctx.textBaseline = 'top';
ctx.textBaseline = 'bogus';
_assertSame(ctx.textBaseline, 'top', "ctx.textBaseline", "'top'");

ctx.textBaseline = 'top';
ctx.textBaseline = 'MIDDLE';
_assertSame(ctx.textBaseline, 'top', "ctx.textBaseline", "'top'");

ctx.textBaseline = 'top';
ctx.textBaseline = 'middle ';
_assertSame(ctx.textBaseline, 'top', "ctx.textBaseline", "'top'");

ctx.textBaseline = 'top';
ctx.textBaseline = 'middle\0';
_assertSame(ctx.textBaseline, 'top', "ctx.textBaseline", "'top'");


});

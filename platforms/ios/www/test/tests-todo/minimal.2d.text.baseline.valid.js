_addTest(function(canvas, ctx) {

ctx.textBaseline = 'top';
_assertSame(ctx.textBaseline, 'top', "ctx.textBaseline", "'top'");

ctx.textBaseline = 'hanging';
_assertSame(ctx.textBaseline, 'hanging', "ctx.textBaseline", "'hanging'");

ctx.textBaseline = 'middle';
_assertSame(ctx.textBaseline, 'middle', "ctx.textBaseline", "'middle'");

ctx.textBaseline = 'alphabetic';
_assertSame(ctx.textBaseline, 'alphabetic', "ctx.textBaseline", "'alphabetic'");

ctx.textBaseline = 'ideographic';
_assertSame(ctx.textBaseline, 'ideographic', "ctx.textBaseline", "'ideographic'");

ctx.textBaseline = 'bottom';
_assertSame(ctx.textBaseline, 'bottom', "ctx.textBaseline", "'bottom'");


});

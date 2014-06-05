_addTest(function(canvas, ctx) {

ctx.shadowColor = '#00ff00';
ctx.shadowColor = 'bogus';
_assertSame(ctx.shadowColor, '#00ff00', "ctx.shadowColor", "'#00ff00'");

ctx.shadowColor = '#00ff00';
ctx.shadowColor = 'red bogus';
_assertSame(ctx.shadowColor, '#00ff00', "ctx.shadowColor", "'#00ff00'");

ctx.shadowColor = '#00ff00';
ctx.shadowColor = ctx;
_assertSame(ctx.shadowColor, '#00ff00', "ctx.shadowColor", "'#00ff00'");

ctx.shadowColor = '#00ff00';
ctx.shadowColor = undefined;
_assertSame(ctx.shadowColor, '#00ff00', "ctx.shadowColor", "'#00ff00'");


});

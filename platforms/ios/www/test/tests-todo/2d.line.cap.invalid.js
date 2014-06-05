_addTest(function(canvas, ctx) {

ctx.lineCap = 'butt'
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");

ctx.lineCap = 'butt';
ctx.lineCap = 'invalid';
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");

ctx.lineCap = 'butt';
ctx.lineCap = 'ROUND';
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");

ctx.lineCap = 'butt';
ctx.lineCap = 'round\0';
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");

ctx.lineCap = 'butt';
ctx.lineCap = 'round ';
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");

ctx.lineCap = 'butt';
ctx.lineCap = "";
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");

ctx.lineCap = 'butt';
ctx.lineCap = 'bevel';
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");


});

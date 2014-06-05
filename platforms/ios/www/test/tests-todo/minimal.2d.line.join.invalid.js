_addTest(function(canvas, ctx) {

ctx.lineJoin = 'bevel'
_assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");

ctx.lineJoin = 'bevel';
ctx.lineJoin = 'invalid';
_assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");

ctx.lineJoin = 'bevel';
ctx.lineJoin = 'ROUND';
_assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");

ctx.lineJoin = 'bevel';
ctx.lineJoin = 'round\0';
_assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");

ctx.lineJoin = 'bevel';
ctx.lineJoin = 'round ';
_assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");

ctx.lineJoin = 'bevel';
ctx.lineJoin = "";
_assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");

ctx.lineJoin = 'bevel';
ctx.lineJoin = 'butt';
_assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");


});

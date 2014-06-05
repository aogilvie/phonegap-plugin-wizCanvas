_addTest(function(canvas, ctx) {

ctx.lineJoin = 'bevel'
_assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");

ctx.lineJoin = 'round';
_assertSame(ctx.lineJoin, 'round', "ctx.lineJoin", "'round'");

ctx.lineJoin = 'miter';
_assertSame(ctx.lineJoin, 'miter', "ctx.lineJoin", "'miter'");


});

_addTest(function(canvas, ctx) {

ctx.shadowColor = 'lime';
_assertSame(ctx.shadowColor, '#00ff00', "ctx.shadowColor", "'#00ff00'");

ctx.shadowColor = 'RGBA(0,255, 0,0)';
_assertSame(ctx.shadowColor, 'rgba(0, 255, 0, 0.0)', "ctx.shadowColor", "'rgba(0, 255, 0, 0.0)'");


});

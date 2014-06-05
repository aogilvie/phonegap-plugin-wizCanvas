_addTest(function(canvas, ctx) {

ctx.globalAlpha = 0.5;
var a = ctx.globalAlpha; // might not be exactly 0.5, if it is rounded/quantised, so remember for future comparisons
ctx.globalAlpha = Infinity;
_assertEqual(ctx.globalAlpha, a, "ctx.globalAlpha", "a");
ctx.globalAlpha = -Infinity;
_assertEqual(ctx.globalAlpha, a, "ctx.globalAlpha", "a");
ctx.globalAlpha = NaN;
_assertEqual(ctx.globalAlpha, a, "ctx.globalAlpha", "a");


});

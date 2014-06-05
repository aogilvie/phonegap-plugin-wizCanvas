_addTest(function(canvas, ctx) {

ctx.globalAlpha = 0.5;
var a = ctx.globalAlpha; // might not be exactly 0.5, if it is rounded/quantised, so remember for future comparisons
ctx.globalAlpha = 1.1;
_assertEqual(ctx.globalAlpha, a, "ctx.globalAlpha", "a");
ctx.globalAlpha = -0.1;
_assertEqual(ctx.globalAlpha, a, "ctx.globalAlpha", "a");
ctx.globalAlpha = 0;
_assertEqual(ctx.globalAlpha, 0, "ctx.globalAlpha", "0");
ctx.globalAlpha = 1;
_assertEqual(ctx.globalAlpha, 1, "ctx.globalAlpha", "1");


});

_addTest(function(canvas, ctx) {

var g1 = ctx.createLinearGradient(0, 0, 100, 0);
var g2 = ctx.createLinearGradient(0, 0, 100, 0);
_assertDifferent(g1, g2, "g1", "g2");
ctx.fillStyle = g1;
_assertSame(ctx.fillStyle, g1, "ctx.fillStyle", "g1");


});

_addTest(function(canvas, ctx) {

window.CanvasGradient.prototype.thisImplementsCanvasGradient = true;

var g1 = ctx.createLinearGradient(0, 0, 100, 0);
_assertDifferent(g1.addColorStop, undefined, "g1.addColorStop", "undefined");
_assertSame(g1.thisImplementsCanvasGradient, true, "g1.thisImplementsCanvasGradient", "true");

var g2 = ctx.createRadialGradient(0, 0, 10, 0, 0, 20);
_assertDifferent(g2.addColorStop, undefined, "g2.addColorStop", "undefined");
_assertSame(g2.thisImplementsCanvasGradient, true, "g2.thisImplementsCanvasGradient", "true");


});

_addTest(function(canvas, ctx) {

window.HTMLCanvasElement.prototype.getZero = function () { return 0; };
_assertSame(canvas.getZero(), 0, "canvas.getZero()", "0");


});

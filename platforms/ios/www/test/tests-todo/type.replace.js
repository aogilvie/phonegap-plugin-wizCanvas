_addTest(function(canvas, ctx) {

window.HTMLCanvasElement.prototype.getContext = function (name) { return 0; };
_assertSame(canvas.getContext('2d'), 0, "canvas.getContext('2d')", "0");


});

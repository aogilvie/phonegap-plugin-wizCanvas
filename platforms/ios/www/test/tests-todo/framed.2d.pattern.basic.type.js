_addTest(function(canvas, ctx) {

_assertDifferent(window.CanvasPattern, undefined, "window.CanvasPattern", "undefined");

window.CanvasPattern.prototype.thisImplementsCanvasPattern = true;

var img = document.getElementById('green.png');
var pattern = ctx.createPattern(img, 'no-repeat');
_assert(pattern.thisImplementsCanvasPattern, "pattern.thisImplementsCanvasPattern");


});

_addTest(function(canvas, ctx) {

_assert(window.HTMLCanvasElement.prototype, "window.HTMLCanvasElement.prototype");
_assert(window.HTMLCanvasElement.prototype.getContext, "window.HTMLCanvasElement.prototype.getContext");
window.HTMLCanvasElement.prototype = null;
_assert(window.HTMLCanvasElement.prototype, "window.HTMLCanvasElement.prototype");
delete window.HTMLCanvasElement.prototype;
_assert(window.HTMLCanvasElement.prototype, "window.HTMLCanvasElement.prototype");
window.HTMLCanvasElement.prototype.getContext = 1;
_assertSame(window.HTMLCanvasElement.prototype.getContext, 1, "window.HTMLCanvasElement.prototype.getContext", "1");
delete window.HTMLCanvasElement.prototype.getContext;
_assertSame(window.HTMLCanvasElement.prototype.getContext, undefined, "window.HTMLCanvasElement.prototype.getContext", "undefined");


});

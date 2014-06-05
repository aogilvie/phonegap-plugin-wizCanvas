_addTest(function(canvas, ctx) {

var c = document.createElement('canvas');
var d = ctx.canvas;
_assertDifferent(c, d, "c", "d");
try { ctx.canvas = c; } catch (e) {} // TODO: not sure whether this should throw or not...
_assertSame(ctx.canvas, d, "ctx.canvas", "d");


});

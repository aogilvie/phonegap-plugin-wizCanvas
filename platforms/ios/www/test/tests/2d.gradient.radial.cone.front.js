_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

var g = ctx.createRadialGradient(311, 25, 10, 210, 25, 100);
g.addColorStop(0, '#f00');
g.addColorStop(1, '#0f0');
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);

_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 50,1, 0,255,0,255, "50,1", "0,255,0,255");
_assertPixel(canvas, 98,1, 0,255,0,255, "98,1", "0,255,0,255");
_assertPixel(canvas, 1,25, 0,255,0,255, "1,25", "0,255,0,255");
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 98,25, 0,255,0,255, "98,25", "0,255,0,255");
_assertPixel(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");
_assertPixel(canvas, 50,48, 0,255,0,255, "50,48", "0,255,0,255");
_assertPixel(canvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");


});

_addTest(function(canvas, ctx) {

var g = ctx.createLinearGradient(0, 0, 200, 0);
g.addColorStop(0, '#f00');
g.addColorStop(0.25, '#0f0');
g.addColorStop(0.75, '#0f0');
g.addColorStop(1, '#f00');
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);
ctx.translate(-50, 0);
ctx.fillRect(50, 0, 100, 50);
_assertPixel(canvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255");
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");


});

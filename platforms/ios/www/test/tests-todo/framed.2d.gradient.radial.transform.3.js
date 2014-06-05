_addTest(function(canvas, ctx) {

var g = ctx.createRadialGradient(0, 0, 0, 0, 0, 11.2);
g.addColorStop(0, '#0f0');
g.addColorStop(0.5, '#0f0');
g.addColorStop(0.51, '#f00');
g.addColorStop(1, '#f00');
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);
ctx.translate(50, 25);
ctx.scale(10, 10);
ctx.fillRect(-5, -2.5, 10, 5);
_assertPixel(canvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255");
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");


});

_addTest(function(canvas, ctx) {

canvas.width = 50;
var g = ctx.createLinearGradient(0, 0, 100, 0);
g.addColorStop(0, '#0f0');
g.addColorStop(1, '#0f0');
canvas.width = 100;
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

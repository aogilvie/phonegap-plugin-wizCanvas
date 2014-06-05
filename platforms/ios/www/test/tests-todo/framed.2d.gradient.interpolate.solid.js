_addTest(function(canvas, ctx) {

var g = ctx.createLinearGradient(0, 0, 100, 0);
g.addColorStop(0, '#0f0');
g.addColorStop(1, '#0f0');
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

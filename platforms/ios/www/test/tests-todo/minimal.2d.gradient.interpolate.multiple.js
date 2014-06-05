_addTest(function(canvas, ctx) {

canvas.width = 200;
var g = ctx.createLinearGradient(0, 0, 200, 0);
g.addColorStop(0, '#ff0');
g.addColorStop(0.5, '#0ff');
g.addColorStop(1, '#f0f');
ctx.fillStyle = g;
ctx.fillRect(0, 0, 200, 50);
_assertPixelApprox(canvas, 50,25, 127,255,127,255, "50,25", "127,255,127,255", 3);
_assertPixelApprox(canvas, 100,25, 0,255,255,255, "100,25", "0,255,255,255", 3);
_assertPixelApprox(canvas, 150,25, 127,127,255,255, "150,25", "127,127,255,255", 3);


});

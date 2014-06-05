_addTest(function(canvas, ctx) {

canvas.width = 200;
var g = ctx.createLinearGradient(0, 0, 200, 0);
g.addColorStop(0, '#f00');
g.addColorStop(0, '#ff0');
g.addColorStop(0.25, '#00f');
g.addColorStop(0.25, '#0f0');
g.addColorStop(0.25, '#0f0');
g.addColorStop(0.25, '#0f0');
g.addColorStop(0.25, '#ff0');
g.addColorStop(0.5, '#00f');
g.addColorStop(0.5, '#0f0');
g.addColorStop(0.75, '#00f');
g.addColorStop(0.75, '#f00');
g.addColorStop(0.75, '#ff0');
g.addColorStop(0.5, '#0f0');
g.addColorStop(0.5, '#0f0');
g.addColorStop(0.5, '#ff0');
g.addColorStop(1, '#00f');
ctx.fillStyle = g;
ctx.fillRect(0, 0, 200, 50);
_assertPixelApprox(canvas, 49,25, 0,0,255,255, "49,25", "0,0,255,255", 16);
_assertPixelApprox(canvas, 51,25, 255,255,0,255, "51,25", "255,255,0,255", 16);
_assertPixelApprox(canvas, 99,25, 0,0,255,255, "99,25", "0,0,255,255", 16);
_assertPixelApprox(canvas, 101,25, 255,255,0,255, "101,25", "255,255,0,255", 16);
_assertPixelApprox(canvas, 149,25, 0,0,255,255, "149,25", "0,0,255,255", 16);
_assertPixelApprox(canvas, 151,25, 255,255,0,255, "151,25", "255,255,0,255", 16);


});

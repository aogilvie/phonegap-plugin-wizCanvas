_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

var g = ctx.createLinearGradient(25, 0, 75, 0);
g.addColorStop(0.4, '#0f0');
g.addColorStop(0.6, '#0f0');

ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);
_assertPixelApprox(canvas, 20,25, 0,255,0,255, "20,25", "0,255,0,255", 2);
_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);
_assertPixelApprox(canvas, 80,25, 0,255,0,255, "80,25", "0,255,0,255", 2);


});

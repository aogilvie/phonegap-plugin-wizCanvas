_addTest(function(canvas, ctx) {

var g = ctx.createLinearGradient(-100, 0, 200, 0);
g.addColorStop(0, '#f00');
g.addColorStop(1, '#f00');
ctx.fillStyle = g;
g.addColorStop(0.1, '#0f0');
g.addColorStop(0.9, '#0f0');
ctx.fillRect(0, 0, 100, 50);
_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);


});

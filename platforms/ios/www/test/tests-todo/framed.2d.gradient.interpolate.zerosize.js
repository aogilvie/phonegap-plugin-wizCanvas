_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

var g = ctx.createLinearGradient(50, 25, 50, 25); // zero-length line (undefined direction)
g.addColorStop(0, '#f00');
g.addColorStop(1, '#f00');
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);
_assertPixelApprox(canvas, 40,20, 0,255,0,255, "40,20", "0,255,0,255", 2);


});

_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.shadowColor = 'rgba(255, 0, 0, 0.01)';
ctx.shadowOffsetY = 50;
ctx.fillRect(0, -50, 100, 50);

_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 4);


});

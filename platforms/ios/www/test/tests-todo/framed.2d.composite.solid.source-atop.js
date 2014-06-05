_addTest(function(canvas, ctx) {


ctx.fillStyle = 'rgba(0, 255, 255, 1.0)';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'source-atop';
ctx.fillStyle = 'rgba(255, 255, 0, 1.0)';
ctx.fillRect(0, 0, 100, 50);
_assertPixelApprox(canvas, 50,25, 255,255,0,255, "50,25", "255,255,0,255", 5);


});

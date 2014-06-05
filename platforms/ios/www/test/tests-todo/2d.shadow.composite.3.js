_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'destination-out';
ctx.shadowColor = '#f00';
ctx.shadowBlur = 10;
ctx.fillStyle = '#f00';
ctx.fillRect(200, 0, 100, 50);

_assertPixelApprox(canvas, 5,5, 0,255,0,255, "5,5", "0,255,0,255", 2);
_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);


});

_addTest(function(canvas, ctx) {


ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'source-out';
ctx.fillStyle = 'rgba(0, 0, 255, 0.75)';
ctx.translate(0, 25);
ctx.fillRect(0, 50, 100, 50);
_assertPixelApprox(canvas, 50,25, 0,0,0,0, "50,25", "0,0,0,0", 5);


});

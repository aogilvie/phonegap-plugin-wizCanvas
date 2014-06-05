_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50)

var imgdata = ctx.getImageData(0, 0, 100, 50);

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50)

ctx.putImageData(imgdata, 100, 20, 20, 20, -20, -20);
ctx.putImageData(imgdata, 200, 200, 0, 0, 100, 50);
ctx.putImageData(imgdata, 40, 20, -30, -20, 30, 20);
ctx.putImageData(imgdata, -30, 20, 0, 0, 30, 20);

_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);
_assertPixelApprox(canvas, 98,15, 0,255,0,255, "98,15", "0,255,0,255", 2);
_assertPixelApprox(canvas, 98,25, 0,255,0,255, "98,25", "0,255,0,255", 2);
_assertPixelApprox(canvas, 98,45, 0,255,0,255, "98,45", "0,255,0,255", 2);
_assertPixelApprox(canvas, 1,5, 0,255,0,255, "1,5", "0,255,0,255", 2);
_assertPixelApprox(canvas, 1,25, 0,255,0,255, "1,25", "0,255,0,255", 2);
_assertPixelApprox(canvas, 1,45, 0,255,0,255, "1,45", "0,255,0,255", 2);


});

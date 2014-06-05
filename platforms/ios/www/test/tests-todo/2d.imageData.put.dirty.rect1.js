_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50)
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 20, 20)

var imgdata = ctx.getImageData(0, 0, 100, 50);

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50)
ctx.fillStyle = '#f00';
ctx.fillRect(40, 20, 20, 20)
ctx.putImageData(imgdata, 40, 20, 0, 0, 20, 20);

_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);
_assertPixelApprox(canvas, 35,25, 0,255,0,255, "35,25", "0,255,0,255", 2);
_assertPixelApprox(canvas, 65,25, 0,255,0,255, "65,25", "0,255,0,255", 2);
_assertPixelApprox(canvas, 50,15, 0,255,0,255, "50,15", "0,255,0,255", 2);
_assertPixelApprox(canvas, 50,45, 0,255,0,255, "50,45", "0,255,0,255", 2);


});

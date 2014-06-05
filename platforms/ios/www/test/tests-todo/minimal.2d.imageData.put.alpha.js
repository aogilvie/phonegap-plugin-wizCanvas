_addTest(function(canvas, ctx) {

ctx.fillStyle = 'rgba(0, 255, 0, 0.25)';
ctx.fillRect(0, 0, 100, 50)
var imgdata = ctx.getImageData(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50)
ctx.putImageData(imgdata, 0, 0);
_assertPixelApprox(canvas, 50,25, 0,255,0,64, "50,25", "0,255,0,64", 2);


});

_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50)
var imgdata = ctx.getImageData(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50)
ctx.beginPath();
ctx.rect(0, 0, 50, 50);
ctx.clip();
ctx.putImageData(imgdata, 0, 0);
_assertPixelApprox(canvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255", 2);
_assertPixelApprox(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255", 2);


});

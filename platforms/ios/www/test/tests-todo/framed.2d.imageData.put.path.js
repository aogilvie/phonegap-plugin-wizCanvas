_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50)
ctx.rect(0, 0, 100, 50);
var imgdata = ctx.getImageData(0, 0, 100, 50);
ctx.putImageData(imgdata, 0, 0);
ctx.fillStyle = '#0f0';
ctx.fill();
_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);


});

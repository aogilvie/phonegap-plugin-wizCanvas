_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50)
var imgdata = ctx.getImageData(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50)
ctx.globalAlpha = 0.1;
ctx.globalCompositeOperation = 'destination-atop';
ctx.shadowColor = '#f00';
ctx.shadowBlur = 1;
ctx.translate(100, 50);
ctx.scale(0.1, 0.1);
ctx.putImageData(imgdata, 0, 0);
_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);


});

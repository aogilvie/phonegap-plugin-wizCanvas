_addTest(function(canvas, ctx) {


ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'source-in';
var canvas2 = document.createElement('canvas');
ctx.drawImage(canvas2, 0, 0);
_assertPixelApprox(canvas, 50,25, 0,0,0,0, "50,25", "0,0,0,0", 5);


});

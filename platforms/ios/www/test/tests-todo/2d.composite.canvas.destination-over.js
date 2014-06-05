_addTest(function(canvas, ctx) {


var canvas2 = document.createElement('canvas');
canvas2.width = canvas.width;
canvas2.height = canvas.height;
var ctx2 = canvas2.getContext('2d');
ctx2.drawImage('test/images/yellow75.png', 0, 0);
ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'destination-over';
ctx.drawImage(canvas2, 0, 0);
_assertPixelApprox(canvas, 50,25, 109,255,145,223, "50,25", "109,255,145,223", 5);


});

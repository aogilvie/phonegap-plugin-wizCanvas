_addTest(function(canvas, ctx) {


ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'source-in';
ctx.drawImage(document.getElementById('yellow.png'), 40, 40, 10, 10, 40, 50, 10, 10);
_assertPixelApprox(canvas, 15,15, 0,0,0,0, "15,15", "0,0,0,0", 5);
_assertPixelApprox(canvas, 50,25, 0,0,0,0, "50,25", "0,0,0,0", 5);


});

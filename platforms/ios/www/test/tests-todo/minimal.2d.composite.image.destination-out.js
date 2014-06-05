_addTest(function(canvas, ctx) {


ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'destination-out';
ctx.drawImage(document.getElementById('yellow75.png'), 0, 0);
_assertPixelApprox(canvas, 50,25, 0,255,255,31, "50,25", "0,255,255,31", 5);


});

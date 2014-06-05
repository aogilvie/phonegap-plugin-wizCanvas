_addTest(function(canvas, ctx) {


ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'source-out';
ctx.drawImage(document.getElementById('yellow75.png'), 0, 0);
_assertPixelApprox(canvas, 50,25, 255,255,0,95, "50,25", "255,255,0,95", 5);


});

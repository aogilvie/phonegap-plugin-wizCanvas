_addTest(function(canvas, ctx) {


ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'xor';
ctx.drawImage(document.getElementById('yellow75.png'), 0, 0);
_assertPixelApprox(canvas, 50,25, 191,255,63,127, "50,25", "191,255,63,127", 5);


});

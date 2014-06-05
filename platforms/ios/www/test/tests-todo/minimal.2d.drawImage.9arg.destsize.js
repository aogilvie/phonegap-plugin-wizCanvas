_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.drawImage(document.getElementById('green.png'), 1, 1, 1, 1, 0, 0, 100, 50);
ctx.drawImage(document.getElementById('red.png'), 0, 0, 100, 50, -50, 0, 50, 50);
ctx.drawImage(document.getElementById('red.png'), 0, 0, 100, 50, 100, 0, 50, 50);
ctx.drawImage(document.getElementById('red.png'), 0, 0, 100, 50, 0, -25, 100, 25);
ctx.drawImage(document.getElementById('red.png'), 0, 0, 100, 50, 0, 50, 100, 25);
_assertPixelApprox(canvas, 0,0, 0,255,0,255, "0,0", "0,255,0,255", 2);
_assertPixelApprox(canvas, 99,0, 0,255,0,255, "99,0", "0,255,0,255", 2);
_assertPixelApprox(canvas, 0,49, 0,255,0,255, "0,49", "0,255,0,255", 2);
_assertPixelApprox(canvas, 99,49, 0,255,0,255, "99,49", "0,255,0,255", 2);


});

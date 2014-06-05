_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.drawImage(document.getElementById('rgrg-256x256.png'), 140, 20, 100, 50, 0, 0, 100, 50);
_assertPixelApprox(canvas, 0,0, 0,255,0,255, "0,0", "0,255,0,255", 2);
_assertPixelApprox(canvas, 99,0, 0,255,0,255, "99,0", "0,255,0,255", 2);
_assertPixelApprox(canvas, 0,49, 0,255,0,255, "0,49", "0,255,0,255", 2);
_assertPixelApprox(canvas, 99,49, 0,255,0,255, "99,49", "0,255,0,255", 2);


});

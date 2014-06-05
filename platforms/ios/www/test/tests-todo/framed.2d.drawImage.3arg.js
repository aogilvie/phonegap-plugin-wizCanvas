_addTest(function(canvas, ctx) {

ctx.drawImage(document.getElementById('green.png'), 0, 0);
ctx.drawImage(document.getElementById('red.png'), -100, 0);
ctx.drawImage(document.getElementById('red.png'), 100, 0);
ctx.drawImage(document.getElementById('red.png'), 0, -50);
ctx.drawImage(document.getElementById('red.png'), 0, 50);

_assertPixelApprox(canvas, 0,0, 0,255,0,255, "0,0", "0,255,0,255", 2);
_assertPixelApprox(canvas, 99,0, 0,255,0,255, "99,0", "0,255,0,255", 2);
_assertPixelApprox(canvas, 0,49, 0,255,0,255, "0,49", "0,255,0,255", 2);
_assertPixelApprox(canvas, 99,49, 0,255,0,255, "99,49", "0,255,0,255", 2);


});

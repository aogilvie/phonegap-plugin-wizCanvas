_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 1, 100, 49);
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 1);
ctx.drawImage(canvas, 0, 1);
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 2);

_assertPixelApprox(canvas, 0,0, 0,255,0,255, "0,0", "0,255,0,255", 2);
_assertPixelApprox(canvas, 99,0, 0,255,0,255, "99,0", "0,255,0,255", 2);
_assertPixelApprox(canvas, 0,49, 0,255,0,255, "0,49", "0,255,0,255", 2);
_assertPixelApprox(canvas, 99,49, 0,255,0,255, "99,49", "0,255,0,255", 2);


});

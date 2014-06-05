_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.shadowOffsetY = 50;
ctx.shadowColor = '#0f0';
ctx.drawImage(document.getElementById('redtransparent.png'), 0, 0, 100, 50, -10, -50, 240, 50);

_assertPixelApprox(canvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255", 2);
_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);
_assertPixelApprox(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255", 2);


});

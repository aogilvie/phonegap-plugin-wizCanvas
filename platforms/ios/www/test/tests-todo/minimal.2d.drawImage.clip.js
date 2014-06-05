_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.rect(-10, -10, 1, 1);
ctx.clip();
ctx.drawImage(document.getElementById('red.png'), 0, 0);
_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);


});

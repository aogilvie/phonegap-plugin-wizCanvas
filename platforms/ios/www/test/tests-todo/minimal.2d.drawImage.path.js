_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.rect(0, 0, 100, 50);
ctx.drawImage(document.getElementById('red.png'), 0, 0);
ctx.fill();
_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);


});

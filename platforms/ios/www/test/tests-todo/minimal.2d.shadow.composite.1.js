_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'xor';
ctx.shadowColor = '#f00';
ctx.shadowOffsetX = 100;
ctx.fillStyle = '#0f0';
ctx.fillRect(-100, 0, 200, 50);

_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);


});

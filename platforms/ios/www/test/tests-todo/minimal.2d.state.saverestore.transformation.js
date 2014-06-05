_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.save();
ctx.translate(200, 0);
ctx.restore();
ctx.fillStyle = '#f00';
ctx.fillRect(-200, 0, 100, 50);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

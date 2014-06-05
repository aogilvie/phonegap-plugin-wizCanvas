_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.save();
ctx.scale(-1, 1);
ctx.fillStyle = '#0f0';
ctx.fillRect(-50, 0, 50, 50);
ctx.restore();

ctx.save();
ctx.scale(1, -1);
ctx.fillStyle = '#0f0';
ctx.fillRect(50, -50, 50, 50);
ctx.restore();
_assertPixel(canvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255");
_assertPixel(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");


});

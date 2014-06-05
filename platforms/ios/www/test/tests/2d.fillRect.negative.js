_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 50, 25);
ctx.fillRect(100, 0, -50, 25);
ctx.fillRect(0, 50, 50, -25);
ctx.fillRect(100, 50, -50, -25);
_assertPixel(canvas, 25,12, 0,255,0,255, "25,12", "0,255,0,255");
_assertPixel(canvas, 75,12, 0,255,0,255, "75,12", "0,255,0,255");
_assertPixel(canvas, 25,37, 0,255,0,255, "25,37", "0,255,0,255");
_assertPixel(canvas, 75,37, 0,255,0,255, "75,37", "0,255,0,255");


});

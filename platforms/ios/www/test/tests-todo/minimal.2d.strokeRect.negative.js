_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.strokeStyle = '#0f0';
ctx.lineWidth = 25;
ctx.strokeRect(12, 12, 26, 1);
ctx.strokeRect(88, 12, -26, 1);
ctx.strokeRect(12, 38, 26, -1);
ctx.strokeRect(88, 38, -26, -1);
_assertPixel(canvas, 25,12, 0,255,0,255, "25,12", "0,255,0,255");
_assertPixel(canvas, 75,12, 0,255,0,255, "75,12", "0,255,0,255");
_assertPixel(canvas, 25,37, 0,255,0,255, "25,37", "0,255,0,255");
_assertPixel(canvas, 75,37, 0,255,0,255, "75,37", "0,255,0,255");


});

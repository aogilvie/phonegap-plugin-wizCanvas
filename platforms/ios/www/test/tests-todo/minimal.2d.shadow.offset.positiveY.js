_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#0f0';
ctx.shadowColor = '#0f0';
ctx.shadowOffsetY = 25;
ctx.fillRect(0, 0, 100, 25);
_assertPixel(canvas, 50,12, 0,255,0,255, "50,12", "0,255,0,255");
_assertPixel(canvas, 50,37, 0,255,0,255, "50,37", "0,255,0,255");


});

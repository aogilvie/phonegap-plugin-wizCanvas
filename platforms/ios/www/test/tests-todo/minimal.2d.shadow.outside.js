_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.shadowColor = '#0f0';
ctx.shadowOffsetX = 100;
ctx.fillRect(-100, 0, 25, 50);
ctx.shadowOffsetX = -100;
ctx.fillRect(175, 0, 25, 50);
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 100;
ctx.fillRect(25, -100, 50, 25);
ctx.shadowOffsetY = -100;
ctx.fillRect(25, 125, 50, 25);
_assertPixel(canvas, 12,25, 0,255,0,255, "12,25", "0,255,0,255");
_assertPixel(canvas, 87,25, 0,255,0,255, "87,25", "0,255,0,255");
_assertPixel(canvas, 50,12, 0,255,0,255, "50,12", "0,255,0,255");
_assertPixel(canvas, 50,37, 0,255,0,255, "50,37", "0,255,0,255");


});

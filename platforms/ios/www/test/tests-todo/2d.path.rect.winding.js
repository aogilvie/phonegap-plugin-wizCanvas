_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.beginPath();
ctx.fillStyle = '#f00';
ctx.rect(0, 0, 50, 50);
ctx.rect(100, 50, -50, -50);
ctx.rect(0, 25, 100, -25);
ctx.rect(100, 25, -100, 25);
ctx.fill();
_assertPixel(canvas, 25,12, 0,255,0,255, "25,12", "0,255,0,255");
_assertPixel(canvas, 75,12, 0,255,0,255, "75,12", "0,255,0,255");
_assertPixel(canvas, 25,37, 0,255,0,255, "25,37", "0,255,0,255");
_assertPixel(canvas, 75,37, 0,255,0,255, "75,37", "0,255,0,255");


});

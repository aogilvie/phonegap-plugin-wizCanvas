_addTest(function(canvas, ctx) {

canvas.width = 100;
ctx.rect(0, 0, 1, 1);
ctx.clip();
canvas.width = 100;
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 20,20, 0,255,0,255, "20,20", "0,255,0,255");


});

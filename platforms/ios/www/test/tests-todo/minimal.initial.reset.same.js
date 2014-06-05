_addTest(function(canvas, ctx) {

canvas.width = 100;
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 50, 50);
_assertPixel(canvas, 20,20, 255,0,0,255, "20,20", "255,0,0,255");
canvas.width = 100;
_assertPixel(canvas, 20,20, 0,0,0,0, "20,20", "0,0,0,0");


});

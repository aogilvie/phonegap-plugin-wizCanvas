_addTest(function(canvas, ctx) {

canvas.width = 100;
ctx.rect(0, 0, 100, 50);
canvas.width = 100;
ctx.fillStyle = '#f00';
ctx.fill();
_assertPixel(canvas, 20,20, 0,0,0,0, "20,20", "0,0,0,0");


});

_addTest(function(canvas, ctx) {

canvas.width = 30;
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 30, 50);
var p = ctx.createPattern(canvas, 'repeat-x');
canvas.width = 100;
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = p;
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

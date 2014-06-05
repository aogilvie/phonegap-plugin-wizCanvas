_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.scale(50, 50);
ctx.strokeStyle = '#0f0';
ctx.moveTo(0, 0.5);
ctx.lineTo(2, 0.5);
ctx.stroke();

_assertPixel(canvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255");
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");
_assertPixel(canvas, 50,5, 0,255,0,255, "50,5", "0,255,0,255");
_assertPixel(canvas, 50,45, 0,255,0,255, "50,45", "0,255,0,255");


});

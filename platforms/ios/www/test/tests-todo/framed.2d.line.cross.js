_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.lineWidth = 200;
ctx.lineJoin = 'bevel';

ctx.strokeStyle = '#f00';
ctx.beginPath();
ctx.moveTo(110, 50);
ctx.lineTo(110, 60);
ctx.lineTo(100, 60);
ctx.stroke();

_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 48,1, 0,255,0,255, "48,1", "0,255,0,255");
_assertPixel(canvas, 48,48, 0,255,0,255, "48,48", "0,255,0,255");
_assertPixel(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");


});

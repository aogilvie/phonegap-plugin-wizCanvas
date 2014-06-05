_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.lineWidth = 1600;
ctx.lineJoin = 'miter';

ctx.strokeStyle = '#0f0';
ctx.miterLimit = 1.083;
ctx.beginPath();
ctx.moveTo(800, 10000);
ctx.lineTo(800, 300);
ctx.lineTo(10000, -8900);
ctx.stroke();

ctx.strokeStyle = '#f00';
ctx.miterLimit = 1.082;
ctx.beginPath();
ctx.moveTo(800, 10000);
ctx.lineTo(800, 300);
ctx.lineTo(10000, -8900);
ctx.stroke();

_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 48,1, 0,255,0,255, "48,1", "0,255,0,255");
_assertPixel(canvas, 48,48, 0,255,0,255, "48,48", "0,255,0,255");
_assertPixel(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");


});

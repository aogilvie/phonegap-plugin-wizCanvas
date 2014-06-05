_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.lineWidth = 200;
ctx.lineJoin = 'miter';

ctx.strokeStyle = '#0f0';
ctx.miterLimit = 2.614;
ctx.beginPath();
ctx.moveTo(100, 1000);
ctx.lineTo(100, 100);
ctx.lineTo(1000, 1000);
ctx.stroke();

ctx.strokeStyle = '#f00';
ctx.miterLimit = 2.613;
ctx.beginPath();
ctx.moveTo(100, 1000);
ctx.lineTo(100, 100);
ctx.lineTo(1000, 1000);
ctx.stroke();

_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 48,1, 0,255,0,255, "48,1", "0,255,0,255");
_assertPixel(canvas, 48,48, 0,255,0,255, "48,48", "0,255,0,255");
_assertPixel(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");


});

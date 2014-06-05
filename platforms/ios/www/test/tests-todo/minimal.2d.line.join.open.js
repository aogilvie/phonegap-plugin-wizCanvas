_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.strokeStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.lineJoin = 'miter';
ctx.lineWidth = 200;

ctx.beginPath();
ctx.moveTo(100, 50);
ctx.lineTo(100, 1000);
ctx.lineTo(1000, 1000);
ctx.lineTo(1000, 50);
ctx.lineTo(100, 50);
ctx.stroke();

_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 48,1, 0,255,0,255, "48,1", "0,255,0,255");
_assertPixel(canvas, 48,48, 0,255,0,255, "48,48", "0,255,0,255");
_assertPixel(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");


});

_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.lineWidth = 400;
ctx.lineJoin = 'miter';

ctx.strokeStyle = '#f00';
ctx.miterLimit = 1.414;
ctx.beginPath();
ctx.moveTo(200, 1000);
ctx.lineTo(200, 200);
ctx.lineTo(1000, 201); // slightly non-right-angle to avoid being a special case
ctx.stroke();

_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 48,1, 0,255,0,255, "48,1", "0,255,0,255");
_assertPixel(canvas, 48,48, 0,255,0,255, "48,48", "0,255,0,255");
_assertPixel(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");


});

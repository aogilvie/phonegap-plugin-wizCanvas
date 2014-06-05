_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.strokeStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.lineJoin = 'bevel';
ctx.lineCap = 'square';
ctx.lineWidth = 400;

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 1000);
ctx.lineTo(1000, 1000);
ctx.lineTo(1000, 200);
ctx.lineTo(200, 200);
ctx.stroke();

_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 48,1, 0,255,0,255, "48,1", "0,255,0,255");
_assertPixel(canvas, 48,48, 0,255,0,255, "48,48", "0,255,0,255");
_assertPixel(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");


});

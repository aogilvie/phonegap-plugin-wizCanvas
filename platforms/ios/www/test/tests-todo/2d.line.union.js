_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.lineWidth = 100;
ctx.lineCap = 'round';

ctx.strokeStyle = '#0f0';
ctx.beginPath();
ctx.moveTo(0, 24);
ctx.lineTo(100, 25);
ctx.lineTo(0, 26);
ctx.closePath();
ctx.stroke();

_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 25,1, 0,255,0,255, "25,1", "0,255,0,255");
_assertPixel(canvas, 48,1, 0,255,0,255, "48,1", "0,255,0,255");
_assertPixel(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");
_assertPixel(canvas, 25,1, 0,255,0,255, "25,1", "0,255,0,255");
_assertPixel(canvas, 48,48, 0,255,0,255, "48,48", "0,255,0,255");


});

_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.lineCap = 'square';
ctx.lineWidth = 20;

ctx.fillStyle = '#f00';
ctx.strokeStyle = '#0f0';
ctx.fillRect(15, 5, 20, 40);
ctx.beginPath();
ctx.moveTo(25, 15);
ctx.lineTo(25, 35);
ctx.stroke();

ctx.fillStyle = '#0f0';
ctx.strokeStyle = '#f00';
ctx.beginPath();
ctx.moveTo(75, 15);
ctx.lineTo(75, 35);
ctx.stroke();
ctx.fillRect(65, 5, 20, 40);

_assertPixel(canvas, 25,4, 0,255,0,255, "25,4", "0,255,0,255");
_assertPixel(canvas, 25,5, 0,255,0,255, "25,5", "0,255,0,255");
_assertPixel(canvas, 25,6, 0,255,0,255, "25,6", "0,255,0,255");
_assertPixel(canvas, 25,44, 0,255,0,255, "25,44", "0,255,0,255");
_assertPixel(canvas, 25,45, 0,255,0,255, "25,45", "0,255,0,255");
_assertPixel(canvas, 25,46, 0,255,0,255, "25,46", "0,255,0,255");

_assertPixel(canvas, 75,4, 0,255,0,255, "75,4", "0,255,0,255");
_assertPixel(canvas, 75,5, 0,255,0,255, "75,5", "0,255,0,255");
_assertPixel(canvas, 75,6, 0,255,0,255, "75,6", "0,255,0,255");
_assertPixel(canvas, 75,44, 0,255,0,255, "75,44", "0,255,0,255");
_assertPixel(canvas, 75,45, 0,255,0,255, "75,45", "0,255,0,255");
_assertPixel(canvas, 75,46, 0,255,0,255, "75,46", "0,255,0,255");


});

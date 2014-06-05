_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.lineCap = 'butt';
ctx.lineWidth = 20;

ctx.fillStyle = '#f00';
ctx.strokeStyle = '#0f0';
ctx.fillRect(15, 15, 20, 20);
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
ctx.fillRect(65, 15, 20, 20);

_assertPixel(canvas, 25,14, 0,255,0,255, "25,14", "0,255,0,255");
_assertPixel(canvas, 25,15, 0,255,0,255, "25,15", "0,255,0,255");
_assertPixel(canvas, 25,16, 0,255,0,255, "25,16", "0,255,0,255");
_assertPixel(canvas, 25,34, 0,255,0,255, "25,34", "0,255,0,255");
_assertPixel(canvas, 25,35, 0,255,0,255, "25,35", "0,255,0,255");
_assertPixel(canvas, 25,36, 0,255,0,255, "25,36", "0,255,0,255");

_assertPixel(canvas, 75,14, 0,255,0,255, "75,14", "0,255,0,255");
_assertPixel(canvas, 75,15, 0,255,0,255, "75,15", "0,255,0,255");
_assertPixel(canvas, 75,16, 0,255,0,255, "75,16", "0,255,0,255");
_assertPixel(canvas, 75,34, 0,255,0,255, "75,34", "0,255,0,255");
_assertPixel(canvas, 75,35, 0,255,0,255, "75,35", "0,255,0,255");
_assertPixel(canvas, 75,36, 0,255,0,255, "75,36", "0,255,0,255");


});

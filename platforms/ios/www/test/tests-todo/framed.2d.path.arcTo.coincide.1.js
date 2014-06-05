_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.lineWidth = 50;

ctx.strokeStyle = '#0f0';
ctx.beginPath();
ctx.moveTo(0, 25);
ctx.arcTo(0, 25, 50, 1000, 1);
ctx.lineTo(100, 25);
ctx.stroke();

ctx.strokeStyle = '#f00';
ctx.beginPath();
ctx.moveTo(50, 25);
ctx.arcTo(50, 25, 100, 25, 1);
ctx.stroke();

_assertPixel(canvas, 50,1, 0,255,0,255, "50,1", "0,255,0,255");
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 50,48, 0,255,0,255, "50,48", "0,255,0,255");


});

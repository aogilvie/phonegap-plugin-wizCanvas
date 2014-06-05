_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.strokeStyle = '#f00';
ctx.shadowColor = '#f00';
ctx.shadowOffsetY = 50;
ctx.beginPath();
ctx.lineWidth = 50;
ctx.lineCap = 'butt';
ctx.moveTo(-50, -25);
ctx.lineTo(0, -25);
ctx.moveTo(100, -25);
ctx.lineTo(150, -25);
ctx.stroke();

_assertPixel(canvas, 1,25, 0,255,0,255, "1,25", "0,255,0,255");
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 98,25, 0,255,0,255, "98,25", "0,255,0,255");


});

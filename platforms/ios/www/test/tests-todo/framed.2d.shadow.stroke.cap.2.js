_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.strokeStyle = '#f00';
ctx.shadowColor = '#0f0';
ctx.shadowOffsetY = 50;
ctx.beginPath();
ctx.lineWidth = 50;
ctx.lineCap = 'square';
ctx.moveTo(25, -25);
ctx.lineTo(75, -25);
ctx.stroke();

_assertPixel(canvas, 1,25, 0,255,0,255, "1,25", "0,255,0,255");
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 98,25, 0,255,0,255, "98,25", "0,255,0,255");


});

_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.moveTo(0, 25);
ctx.moveTo(100, 25);
ctx.moveTo(0, 25);
ctx.lineTo(100, 25);
ctx.strokeStyle = '#0f0';
ctx.lineWidth = 50;
ctx.stroke();
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.strokeStyle = '#0f0';
ctx.lineWidth = 40;
ctx.moveTo(0, 10);
ctx.lineTo(100, 10);
ctx.moveTo(100, 40);
ctx.lineTo(0, 40);
ctx.stroke();

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.strokeStyle = '#f00';
ctx.lineWidth = 50;
ctx.beginPath();
ctx.lineTo(100, 50);
ctx.stroke();
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

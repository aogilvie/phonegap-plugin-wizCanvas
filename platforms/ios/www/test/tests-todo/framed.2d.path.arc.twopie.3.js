_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.strokeStyle = '#0f0';
ctx.lineWidth = 100;
ctx.beginPath();
ctx.arc(50, 25, 50, 0, 2*Math.PI + 1e-4, true);
ctx.stroke();
_assertPixel(canvas, 50,20, 0,255,0,255, "50,20", "0,255,0,255");


});

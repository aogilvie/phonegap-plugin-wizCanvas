_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.lineWidth = 200;
ctx.strokeStyle = '#f00';
ctx.beginPath();
ctx.arc(100, 50, 25, 0, -Math.PI/2, true);
ctx.stroke();
ctx.beginPath();
ctx.arc(0, 0, 25, 0, -Math.PI/2, true);
ctx.stroke();
_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

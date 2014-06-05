_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.lineWidth = 180;
ctx.strokeStyle = '#0f0';
ctx.beginPath();
ctx.arc(-50, 50, 25, 0, -Math.PI/2, true);
ctx.stroke();
ctx.beginPath();
ctx.arc(100, 0, 25, 0, -Math.PI/2, true);
ctx.stroke();
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 90,10, 0,255,0,255, "90,10", "0,255,0,255");
_assertPixel(canvas, 97,1, 0,255,0,255, "97,1", "0,255,0,255");
_assertPixel(canvas, 97,2, 0,255,0,255, "97,2", "0,255,0,255");
_assertPixel(canvas, 97,3, 0,255,0,255, "97,3", "0,255,0,255");
_assertPixel(canvas, 2,48, 0,255,0,255, "2,48", "0,255,0,255");


});

_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.clearRect(0, 0, 100, 0);
ctx.clearRect(0, 0, 0, 50);
ctx.clearRect(0, 0, 0, 0);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

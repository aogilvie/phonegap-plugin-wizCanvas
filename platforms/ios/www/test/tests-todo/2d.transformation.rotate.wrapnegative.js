_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.rotate(-Math.PI * (1 + 4096));
ctx.fillStyle = '#0f0';
ctx.fillRect(-100, -50, 100, 50);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 98,2, 0,255,0,255, "98,2", "0,255,0,255");
_assertPixel(canvas, 98,47, 0,255,0,255, "98,47", "0,255,0,255");


});

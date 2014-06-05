_addTest(function(canvas, ctx) {

ctx.scale(10, 10);
ctx.translate(0, 5);
ctx.fillStyle = '#0f0';
ctx.fillRect(0, -5, 10, 5);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

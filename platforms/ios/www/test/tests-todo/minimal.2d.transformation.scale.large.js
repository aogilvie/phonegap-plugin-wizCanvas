_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.scale(1e5, 1e5);
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 1, 1);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.translate(100, 10);
ctx.scale(Infinity, 0.1);
ctx.scale(-Infinity, 0.1);
ctx.scale(NaN, 0.1);
ctx.scale(0.1, Infinity);
ctx.scale(0.1, -Infinity);
ctx.scale(0.1, NaN);
ctx.scale(Infinity, Infinity);

ctx.fillStyle = '#0f0';
ctx.fillRect(-100, -10, 100, 50);

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

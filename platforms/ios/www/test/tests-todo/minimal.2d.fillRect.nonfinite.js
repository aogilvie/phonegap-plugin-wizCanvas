_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.fillStyle = '#f00';
ctx.fillRect(Infinity, 0, 100, 50);
ctx.fillRect(-Infinity, 0, 100, 50);
ctx.fillRect(NaN, 0, 100, 50);
ctx.fillRect(0, Infinity, 100, 50);
ctx.fillRect(0, -Infinity, 100, 50);
ctx.fillRect(0, NaN, 100, 50);
ctx.fillRect(0, 0, Infinity, 50);
ctx.fillRect(0, 0, -Infinity, 50);
ctx.fillRect(0, 0, NaN, 50);
ctx.fillRect(0, 0, 100, Infinity);
ctx.fillRect(0, 0, 100, -Infinity);
ctx.fillRect(0, 0, 100, NaN);
ctx.fillRect(Infinity, Infinity, 100, 50);
ctx.fillRect(Infinity, Infinity, Infinity, 50);
ctx.fillRect(Infinity, Infinity, Infinity, Infinity);
ctx.fillRect(Infinity, Infinity, 100, Infinity);
ctx.fillRect(Infinity, 0, Infinity, 50);
ctx.fillRect(Infinity, 0, Infinity, Infinity);
ctx.fillRect(Infinity, 0, 100, Infinity);
ctx.fillRect(0, Infinity, Infinity, 50);
ctx.fillRect(0, Infinity, Infinity, Infinity);
ctx.fillRect(0, Infinity, 100, Infinity);
ctx.fillRect(0, 0, Infinity, Infinity);

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

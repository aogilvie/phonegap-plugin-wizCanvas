_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.strokeStyle = '#f00';
ctx.lineWidth = 150;
ctx.strokeRect(Infinity, 0, 100, 50);
ctx.strokeRect(-Infinity, 0, 100, 50);
ctx.strokeRect(NaN, 0, 100, 50);
ctx.strokeRect(0, Infinity, 100, 50);
ctx.strokeRect(0, -Infinity, 100, 50);
ctx.strokeRect(0, NaN, 100, 50);
ctx.strokeRect(0, 0, Infinity, 50);
ctx.strokeRect(0, 0, -Infinity, 50);
ctx.strokeRect(0, 0, NaN, 50);
ctx.strokeRect(0, 0, 100, Infinity);
ctx.strokeRect(0, 0, 100, -Infinity);
ctx.strokeRect(0, 0, 100, NaN);
ctx.strokeRect(Infinity, Infinity, 100, 50);
ctx.strokeRect(Infinity, Infinity, Infinity, 50);
ctx.strokeRect(Infinity, Infinity, Infinity, Infinity);
ctx.strokeRect(Infinity, Infinity, 100, Infinity);
ctx.strokeRect(Infinity, 0, Infinity, 50);
ctx.strokeRect(Infinity, 0, Infinity, Infinity);
ctx.strokeRect(Infinity, 0, 100, Infinity);
ctx.strokeRect(0, Infinity, Infinity, 50);
ctx.strokeRect(0, Infinity, Infinity, Infinity);
ctx.strokeRect(0, Infinity, 100, Infinity);
ctx.strokeRect(0, 0, Infinity, Infinity);

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

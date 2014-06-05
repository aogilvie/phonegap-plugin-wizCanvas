_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.clearRect(Infinity, 0, 100, 50);
ctx.clearRect(-Infinity, 0, 100, 50);
ctx.clearRect(NaN, 0, 100, 50);
ctx.clearRect(0, Infinity, 100, 50);
ctx.clearRect(0, -Infinity, 100, 50);
ctx.clearRect(0, NaN, 100, 50);
ctx.clearRect(0, 0, Infinity, 50);
ctx.clearRect(0, 0, -Infinity, 50);
ctx.clearRect(0, 0, NaN, 50);
ctx.clearRect(0, 0, 100, Infinity);
ctx.clearRect(0, 0, 100, -Infinity);
ctx.clearRect(0, 0, 100, NaN);
ctx.clearRect(Infinity, Infinity, 100, 50);
ctx.clearRect(Infinity, Infinity, Infinity, 50);
ctx.clearRect(Infinity, Infinity, Infinity, Infinity);
ctx.clearRect(Infinity, Infinity, 100, Infinity);
ctx.clearRect(Infinity, 0, Infinity, 50);
ctx.clearRect(Infinity, 0, Infinity, Infinity);
ctx.clearRect(Infinity, 0, 100, Infinity);
ctx.clearRect(0, Infinity, Infinity, 50);
ctx.clearRect(0, Infinity, Infinity, Infinity);
ctx.clearRect(0, Infinity, 100, Infinity);
ctx.clearRect(0, 0, Infinity, Infinity);

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

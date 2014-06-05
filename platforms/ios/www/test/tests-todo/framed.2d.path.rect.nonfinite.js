_addTest(function(canvas, ctx) {

ctx.moveTo(0, 0);
ctx.lineTo(100, 0);
ctx.rect(Infinity, 50, 1, 1);
ctx.rect(-Infinity, 50, 1, 1);
ctx.rect(NaN, 50, 1, 1);
ctx.rect(0, Infinity, 1, 1);
ctx.rect(0, -Infinity, 1, 1);
ctx.rect(0, NaN, 1, 1);
ctx.rect(0, 50, Infinity, 1);
ctx.rect(0, 50, -Infinity, 1);
ctx.rect(0, 50, NaN, 1);
ctx.rect(0, 50, 1, Infinity);
ctx.rect(0, 50, 1, -Infinity);
ctx.rect(0, 50, 1, NaN);
ctx.rect(Infinity, Infinity, 1, 1);
ctx.rect(Infinity, Infinity, Infinity, 1);
ctx.rect(Infinity, Infinity, Infinity, Infinity);
ctx.rect(Infinity, Infinity, 1, Infinity);
ctx.rect(Infinity, 50, Infinity, 1);
ctx.rect(Infinity, 50, Infinity, Infinity);
ctx.rect(Infinity, 50, 1, Infinity);
ctx.rect(0, Infinity, Infinity, 1);
ctx.rect(0, Infinity, Infinity, Infinity);
ctx.rect(0, Infinity, 1, Infinity);
ctx.rect(0, 50, Infinity, Infinity);
ctx.lineTo(100, 50);
ctx.lineTo(0, 50);
ctx.fillStyle = '#0f0';
ctx.fill();
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 90,45, 0,255,0,255, "90,45", "0,255,0,255");


});

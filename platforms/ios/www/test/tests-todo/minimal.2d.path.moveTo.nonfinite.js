_addTest(function(canvas, ctx) {

ctx.moveTo(0, 0);
ctx.lineTo(100, 0);
ctx.moveTo(Infinity, 50);
ctx.moveTo(-Infinity, 50);
ctx.moveTo(NaN, 50);
ctx.moveTo(0, Infinity);
ctx.moveTo(0, -Infinity);
ctx.moveTo(0, NaN);
ctx.moveTo(Infinity, Infinity);
ctx.lineTo(100, 50);
ctx.lineTo(0, 50);
ctx.fillStyle = '#0f0';
ctx.fill();
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

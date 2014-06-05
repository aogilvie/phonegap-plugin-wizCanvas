_addTest(function(canvas, ctx) {

ctx.moveTo(0, 0);
ctx.lineTo(100, 0);
ctx.lineTo(Infinity, 50);
ctx.lineTo(-Infinity, 50);
ctx.lineTo(NaN, 50);
ctx.lineTo(0, Infinity);
ctx.lineTo(0, -Infinity);
ctx.lineTo(0, NaN);
ctx.lineTo(Infinity, Infinity);
ctx.lineTo(100, 50);
ctx.lineTo(0, 50);
ctx.fillStyle = '#0f0';
ctx.fill();
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 90,45, 0,255,0,255, "90,45", "0,255,0,255");


});

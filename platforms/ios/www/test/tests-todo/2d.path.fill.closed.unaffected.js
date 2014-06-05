_addTest(function(canvas, ctx) {

ctx.fillStyle = '#00f';
ctx.fillRect(0, 0, 100, 50);

ctx.moveTo(0, 0);
ctx.lineTo(100, 0);
ctx.lineTo(100, 50);
ctx.fillStyle = '#f00';
ctx.fill();
ctx.lineTo(0, 50);
ctx.fillStyle = '#0f0';
ctx.fill();

_assertPixel(canvas, 90,10, 0,255,0,255, "90,10", "0,255,0,255");
_assertPixel(canvas, 10,40, 0,255,0,255, "10,40", "0,255,0,255");


});

_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.fillStyle = '#0f0';
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.translate(100, 0);
ctx.arcTo(50, 50, 50, 0, 50);
ctx.lineTo(-100, 0);
ctx.fill();

_assertPixel(canvas, 0,0, 0,255,0,255, "0,0", "0,255,0,255");
_assertPixel(canvas, 50,0, 0,255,0,255, "50,0", "0,255,0,255");
_assertPixel(canvas, 99,0, 0,255,0,255, "99,0", "0,255,0,255");
_assertPixel(canvas, 0,25, 0,255,0,255, "0,25", "0,255,0,255");
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 99,25, 0,255,0,255, "99,25", "0,255,0,255");
_assertPixel(canvas, 0,49, 0,255,0,255, "0,49", "0,255,0,255");
_assertPixel(canvas, 50,49, 0,255,0,255, "50,49", "0,255,0,255");
_assertPixel(canvas, 99,49, 0,255,0,255, "99,49", "0,255,0,255");


});

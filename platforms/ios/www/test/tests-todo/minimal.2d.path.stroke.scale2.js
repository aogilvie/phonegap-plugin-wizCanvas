_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.beginPath();
ctx.rect(25, 12.5, 50, 25);
ctx.save();
ctx.rotate(Math.PI/2);
ctx.scale(25, 50);
ctx.strokeStyle = '#0f0';
ctx.stroke();
ctx.restore();

ctx.beginPath();
ctx.rect(-25, -12.5, 150, 75);
ctx.save();
ctx.rotate(Math.PI/2);
ctx.scale(25, 50);
ctx.strokeStyle = '#f00';
ctx.stroke();
ctx.restore();

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

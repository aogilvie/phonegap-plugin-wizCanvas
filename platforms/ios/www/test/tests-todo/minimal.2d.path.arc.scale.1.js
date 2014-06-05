_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.scale(2, 0.5);
ctx.fillStyle = '#0f0';
ctx.beginPath();
ctx.arc(25, 50, 56, 0, 2*Math.PI, false);
ctx.fill();
ctx.fillStyle = '#f00';
ctx.beginPath();
ctx.moveTo(-25, 50);
ctx.arc(-25, 50, 24, 0, 2*Math.PI, false);
ctx.moveTo(75, 50);
ctx.arc(75, 50, 24, 0, 2*Math.PI, false);
ctx.moveTo(25, -25);
ctx.arc(25, -25, 24, 0, 2*Math.PI, false);
ctx.moveTo(25, 125);
ctx.arc(25, 125, 24, 0, 2*Math.PI, false);
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

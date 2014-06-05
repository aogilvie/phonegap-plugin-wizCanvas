_addTest(function(canvas, ctx) {

var tol = 1; // tolerance to avoid antialiasing artifacts

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.fillStyle = '#f00';
ctx.beginPath();
ctx.moveTo(30+tol, 40);
ctx.lineTo(110, -20+tol);
ctx.lineTo(110, 100-tol);
ctx.fill();

var g = ctx.createRadialGradient(30+10*5/2, 40, 10*3/2, 30+10*15/4, 40, 10*9/4);
g.addColorStop(0, '#0f0');
g.addColorStop(1, '#0f0');
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);

_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 50,1, 0,255,0,255, "50,1", "0,255,0,255");
_assertPixel(canvas, 98,1, 0,255,0,255, "98,1", "0,255,0,255");
_assertPixel(canvas, 1,25, 0,255,0,255, "1,25", "0,255,0,255");
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 98,25, 0,255,0,255, "98,25", "0,255,0,255");
_assertPixel(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");
_assertPixel(canvas, 50,48, 0,255,0,255, "50,48", "0,255,0,255");
_assertPixel(canvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");


});

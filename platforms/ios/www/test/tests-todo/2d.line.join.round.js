_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

var tol = 1; // tolerance to avoid antialiasing artifacts

ctx.lineJoin = 'round';
ctx.lineWidth = 20;

ctx.fillStyle = '#f00';
ctx.strokeStyle = '#0f0';

ctx.fillRect(10, 10, 20, 20);
ctx.fillRect(20, 20, 20, 20);
ctx.beginPath();
ctx.moveTo(30, 20);
ctx.arc(30, 20, 10-tol, 0, 2*Math.PI, true);
ctx.fill();

ctx.beginPath();
ctx.moveTo(10, 20);
ctx.lineTo(30, 20);
ctx.lineTo(30, 40);
ctx.stroke();


ctx.fillStyle = '#0f0';
ctx.strokeStyle = '#f00';

ctx.beginPath();
ctx.moveTo(60, 20);
ctx.lineTo(80, 20);
ctx.lineTo(80, 40);
ctx.stroke();

ctx.fillRect(60, 10, 20, 20);
ctx.fillRect(70, 20, 20, 20);
ctx.beginPath();
ctx.moveTo(80, 20);
ctx.arc(80, 20, 10+tol, 0, 2*Math.PI, true);
ctx.fill();

_assertPixel(canvas, 36,14, 0,255,0,255, "36,14", "0,255,0,255");
_assertPixel(canvas, 36,13, 0,255,0,255, "36,13", "0,255,0,255");
_assertPixel(canvas, 37,13, 0,255,0,255, "37,13", "0,255,0,255");
_assertPixel(canvas, 38,13, 0,255,0,255, "38,13", "0,255,0,255");
_assertPixel(canvas, 38,12, 0,255,0,255, "38,12", "0,255,0,255");

_assertPixel(canvas, 86,14, 0,255,0,255, "86,14", "0,255,0,255");
_assertPixel(canvas, 86,13, 0,255,0,255, "86,13", "0,255,0,255");
_assertPixel(canvas, 87,13, 0,255,0,255, "87,13", "0,255,0,255");
_assertPixel(canvas, 88,13, 0,255,0,255, "88,13", "0,255,0,255");
_assertPixel(canvas, 88,12, 0,255,0,255, "88,12", "0,255,0,255");


});

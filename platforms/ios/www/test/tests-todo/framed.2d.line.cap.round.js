_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

var tol = 1; // tolerance to avoid antialiasing artifacts

ctx.lineCap = 'round';
ctx.lineWidth = 20;


ctx.fillStyle = '#f00';
ctx.strokeStyle = '#0f0';

ctx.beginPath();
ctx.moveTo(35-tol, 15);
ctx.arc(25, 15, 10-tol, 0, Math.PI, true);
ctx.arc(25, 35, 10-tol, Math.PI, 0, true);
ctx.fill();

ctx.beginPath();
ctx.moveTo(25, 15);
ctx.lineTo(25, 35);
ctx.stroke();


ctx.fillStyle = '#0f0';
ctx.strokeStyle = '#f00';

ctx.beginPath();
ctx.moveTo(75, 15);
ctx.lineTo(75, 35);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(85+tol, 15);
ctx.arc(75, 15, 10+tol, 0, Math.PI, true);
ctx.arc(75, 35, 10+tol, Math.PI, 0, true);
ctx.fill();

_assertPixel(canvas, 17,6, 0,255,0,255, "17,6", "0,255,0,255");
_assertPixel(canvas, 25,6, 0,255,0,255, "25,6", "0,255,0,255");
_assertPixel(canvas, 32,6, 0,255,0,255, "32,6", "0,255,0,255");
_assertPixel(canvas, 17,43, 0,255,0,255, "17,43", "0,255,0,255");
_assertPixel(canvas, 25,43, 0,255,0,255, "25,43", "0,255,0,255");
_assertPixel(canvas, 32,43, 0,255,0,255, "32,43", "0,255,0,255");

_assertPixel(canvas, 67,6, 0,255,0,255, "67,6", "0,255,0,255");
_assertPixel(canvas, 75,6, 0,255,0,255, "75,6", "0,255,0,255");
_assertPixel(canvas, 82,6, 0,255,0,255, "82,6", "0,255,0,255");
_assertPixel(canvas, 67,43, 0,255,0,255, "67,43", "0,255,0,255");
_assertPixel(canvas, 75,43, 0,255,0,255, "75,43", "0,255,0,255");
_assertPixel(canvas, 82,43, 0,255,0,255, "82,43", "0,255,0,255");


});

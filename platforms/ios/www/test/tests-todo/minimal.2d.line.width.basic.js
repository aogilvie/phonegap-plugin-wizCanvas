_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.lineWidth = 20;
// Draw a green line over a red box, to check the line is not too small
ctx.fillStyle = '#f00';
ctx.strokeStyle = '#0f0';
ctx.fillRect(15, 15, 20, 20);
ctx.beginPath();
ctx.moveTo(25, 15);
ctx.lineTo(25, 35);
ctx.stroke();

// Draw a green box over a red line, to check the line is not too large
ctx.fillStyle = '#0f0';
ctx.strokeStyle = '#f00';
ctx.beginPath();
ctx.moveTo(75, 15);
ctx.lineTo(75, 35);
ctx.stroke();
ctx.fillRect(65, 15, 20, 20);

_assertPixel(canvas, 14,25, 0,255,0,255, "14,25", "0,255,0,255");
_assertPixel(canvas, 15,25, 0,255,0,255, "15,25", "0,255,0,255");
_assertPixel(canvas, 16,25, 0,255,0,255, "16,25", "0,255,0,255");
_assertPixel(canvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255");
_assertPixel(canvas, 34,25, 0,255,0,255, "34,25", "0,255,0,255");
_assertPixel(canvas, 35,25, 0,255,0,255, "35,25", "0,255,0,255");
_assertPixel(canvas, 36,25, 0,255,0,255, "36,25", "0,255,0,255");

_assertPixel(canvas, 64,25, 0,255,0,255, "64,25", "0,255,0,255");
_assertPixel(canvas, 65,25, 0,255,0,255, "65,25", "0,255,0,255");
_assertPixel(canvas, 66,25, 0,255,0,255, "66,25", "0,255,0,255");
_assertPixel(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");
_assertPixel(canvas, 84,25, 0,255,0,255, "84,25", "0,255,0,255");
_assertPixel(canvas, 85,25, 0,255,0,255, "85,25", "0,255,0,255");
_assertPixel(canvas, 86,25, 0,255,0,255, "86,25", "0,255,0,255");


});

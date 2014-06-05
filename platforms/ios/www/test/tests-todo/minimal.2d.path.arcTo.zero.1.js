_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.lineWidth = 50;

ctx.strokeStyle = '#0f0';
ctx.beginPath();
ctx.moveTo(0, 25);
ctx.arcTo(100, 25, 100, 100, 0);
ctx.stroke();

ctx.strokeStyle = '#f00';
ctx.beginPath();
ctx.moveTo(0, -25);
ctx.arcTo(50, -25, 50, 50, 0);
ctx.stroke();

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

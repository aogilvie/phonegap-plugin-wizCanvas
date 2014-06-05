_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.fillStyle = '#0f0';

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, 50);
ctx.lineTo(100, 50);
ctx.lineTo(100, 0);
ctx.clip();

ctx.lineTo(0, 0);
ctx.fill();

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

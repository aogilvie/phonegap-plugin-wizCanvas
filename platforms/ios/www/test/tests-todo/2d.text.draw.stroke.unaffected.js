_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.moveTo(0, 0);
ctx.lineTo(100, 0);

ctx.font = '35px Arial, sans-serif';
ctx.strokeStyle = '#f00';
ctx.strokeText('FAIL', 5, 35);

ctx.lineTo(100, 50);
ctx.lineTo(0, 50);
ctx.fillStyle = '#0f0';
ctx.fill();

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 5,45, 0,255,0,255, "5,45", "0,255,0,255");


});

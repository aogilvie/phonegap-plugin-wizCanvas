_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.rect(0, 0, 10, 50);
ctx.moveTo(100, 0);
ctx.lineTo(10, 0);
ctx.lineTo(10, 50);
ctx.lineTo(100, 50);
ctx.fillStyle = '#0f0';
ctx.fill();
_assertPixel(canvas, 90,25, 0,255,0,255, "90,25", "0,255,0,255");


});

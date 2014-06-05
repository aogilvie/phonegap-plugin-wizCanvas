_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#0f0';
ctx.moveTo(0, 0);
ctx.translate(100, 0);
ctx.lineTo(0, 0);
ctx.translate(0, 50);
ctx.lineTo(0, 0);
ctx.translate(-100, 0);
ctx.lineTo(0, 0);
ctx.translate(1000, 1000);
ctx.rotate(Math.PI/2);
ctx.scale(0.1, 0.1);
ctx.fill();

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

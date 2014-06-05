_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.strokeStyle = '#f00';
ctx.lineWidth = 400;
ctx.lineJoin = 'miter';
ctx.miterLimit = 1.4;

ctx.beginPath();
ctx.moveTo(-1000, 200, 0, 0);
ctx.lineTo(-100, 200);
ctx.lineTo(-100, 200);
ctx.lineTo(-100, 200);
ctx.lineTo(-100, 1000);
ctx.stroke();

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

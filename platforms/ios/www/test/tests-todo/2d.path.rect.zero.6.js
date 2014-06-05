_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.strokeStyle = '#f00';
ctx.lineJoin = 'miter';
ctx.miterLimit = 1.5;
ctx.lineWidth = 200;
ctx.beginPath();
ctx.rect(100, 25, 1000, 0);
ctx.stroke();
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

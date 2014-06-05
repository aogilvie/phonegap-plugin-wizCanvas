_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.scale(2, 1);
ctx.rotate(Math.PI / 2);
ctx.fillStyle = '#0f0';
ctx.fillRect(0, -50, 50, 50);
_assertPixel(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");


});

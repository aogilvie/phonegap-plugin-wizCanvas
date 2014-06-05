_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.scale(Math.sqrt(2), Math.sqrt(2));
ctx.scale(Math.sqrt(2), Math.sqrt(2));
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 50, 25);
_assertPixel(canvas, 90,40, 0,255,0,255, "90,40", "0,255,0,255");


});

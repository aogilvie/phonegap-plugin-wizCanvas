_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.scale(2, 4);
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 50, 12.5);
_assertPixel(canvas, 90,40, 0,255,0,255, "90,40", "0,255,0,255");


});

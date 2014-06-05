_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.setTransform(1/2,0, 0,1/2, 0,0);
ctx.setTransform(2,0, 0,2, 0,0);
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 50, 25);
_assertPixel(canvas, 75,35, 0,255,0,255, "75,35", "0,255,0,255");


});

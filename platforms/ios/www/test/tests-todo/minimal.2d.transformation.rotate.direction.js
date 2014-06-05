_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.rotate(Math.PI / 2);
ctx.fillStyle = '#0f0';
ctx.fillRect(0, -100, 50, 100);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

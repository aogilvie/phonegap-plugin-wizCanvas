_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.translate(-100, 0);
ctx.rect(100, 0, 100, 50);
ctx.translate(0, -100);
ctx.fillStyle = '#0f0';
ctx.fill();

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

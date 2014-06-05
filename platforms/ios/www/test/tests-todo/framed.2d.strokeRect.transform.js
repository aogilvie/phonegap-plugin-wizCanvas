_addTest(function(canvas, ctx) {

ctx.scale(10, 10);
ctx.translate(0, 5);
ctx.strokeStyle = '#0f0';
ctx.lineWidth = 5;
ctx.strokeRect(2.5, -2.6, 5, 0.2);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

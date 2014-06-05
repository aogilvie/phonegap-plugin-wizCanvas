_addTest(function(canvas, ctx) {

ctx.strokeStyle = '#0f0';
ctx.lineWidth = 50;
ctx.strokeRect(25, 24, 50, 2);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

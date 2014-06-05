_addTest(function(canvas, ctx) {

ctx.strokeStyle = '#0f0';
ctx.lineWidth = 250;
ctx.lineJoin = 'round';
ctx.strokeRect(100, 25, 100, 0);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

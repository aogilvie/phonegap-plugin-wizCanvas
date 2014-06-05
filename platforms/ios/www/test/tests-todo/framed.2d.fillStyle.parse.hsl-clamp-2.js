_addTest(function(canvas, ctx) {


ctx.fillStyle = '#f00';
ctx.fillStyle = 'hsl(120, -200%, 49.9%)';
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 50,25, 127,127,127,255, "50,25", "127,127,127,255");


});

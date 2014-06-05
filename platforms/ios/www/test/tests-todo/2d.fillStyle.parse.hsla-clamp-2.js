_addTest(function(canvas, ctx) {


ctx.fillStyle = '#f00';
ctx.fillStyle = 'hsla(120, -200%, 49.9%, 1)';
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 50,25, 127,127,127,255, "50,25", "127,127,127,255");


});

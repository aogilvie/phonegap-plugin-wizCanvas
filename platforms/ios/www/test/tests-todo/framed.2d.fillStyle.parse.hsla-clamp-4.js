_addTest(function(canvas, ctx) {


ctx.fillStyle = '#f00';
ctx.fillStyle = 'hsla(120, 100%, -200%, 1)';
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 50,25, 0,0,0,255, "50,25", "0,0,0,255");


});

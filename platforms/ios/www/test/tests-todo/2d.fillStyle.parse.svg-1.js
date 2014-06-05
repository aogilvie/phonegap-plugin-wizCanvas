_addTest(function(canvas, ctx) {


ctx.fillStyle = '#f00';
ctx.fillStyle = 'gray';
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 50,25, 128,128,128,255, "50,25", "128,128,128,255");


});

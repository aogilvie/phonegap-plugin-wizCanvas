_addTest(function(canvas, ctx) {


ctx.fillStyle = '#f00';
ctx.fillStyle = 'TrAnSpArEnT';
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 50,25, 0,0,0,0, "50,25", "0,0,0,0");


});

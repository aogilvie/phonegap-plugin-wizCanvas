_addTest(function(canvas, ctx) {

canvas.setAttribute('style', 'color: #0f0');
ctx.fillStyle = '#f00';
ctx.fillStyle = 'currentColor';
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

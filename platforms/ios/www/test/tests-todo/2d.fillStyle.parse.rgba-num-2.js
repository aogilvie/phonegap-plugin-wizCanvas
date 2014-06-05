_addTest(function(canvas, ctx) {


ctx.fillStyle = '#f00';
ctx.fillStyle = 'rgba(  0  ,  255  ,  0  ,  0.499  )';
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 50,25, 0,255,0,127, "50,25", "0,255,0,127");


});

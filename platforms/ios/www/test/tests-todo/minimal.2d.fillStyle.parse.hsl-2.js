_addTest(function(canvas, ctx) {


ctx.fillStyle = '#f00';
ctx.fillStyle = 'hsl( -240 , 100% , 50% )';
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

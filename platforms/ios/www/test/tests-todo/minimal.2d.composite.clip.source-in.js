_addTest(function(canvas, ctx) {


ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'source-in';
ctx.rect(-20, -20, 10, 10);
ctx.clip();
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 50, 50);
_assertPixel(canvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255");
_assertPixel(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");


});

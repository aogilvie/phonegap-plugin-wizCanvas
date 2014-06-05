_addTest(function(canvas, ctx) {

ctx.globalCompositeOperation = 'destination-atop';
ctx.shadowColor = '#0f0';
ctx.shadowOffsetX = 0.1;
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

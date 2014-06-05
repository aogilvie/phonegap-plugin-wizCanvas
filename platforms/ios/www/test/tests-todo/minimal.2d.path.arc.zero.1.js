_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.strokeStyle = '#f00';
ctx.lineWidth = 100;
ctx.beginPath();
ctx.arc(50, 25, 50, 0, 0, true);
ctx.stroke();
_assertPixel(canvas, 50,20, 0,255,0,255, "50,20", "0,255,0,255");


});

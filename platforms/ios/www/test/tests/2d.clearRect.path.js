_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.beginPath();
ctx.rect(0, 0, 100, 50);
ctx.clearRect(0, 0, 16, 16);
ctx.fill();
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

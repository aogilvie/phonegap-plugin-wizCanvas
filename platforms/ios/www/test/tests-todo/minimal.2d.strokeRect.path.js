_addTest(function(canvas, ctx) {

ctx.beginPath();
ctx.rect(0, 0, 100, 50);
ctx.strokeStyle = '#f00';
ctx.lineWidth = 5;
ctx.strokeRect(0, 0, 16, 16);
ctx.fillStyle = '#0f0';
ctx.fill();
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

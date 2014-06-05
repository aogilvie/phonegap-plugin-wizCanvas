_addTest(function(canvas, ctx) {

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, 100, 50);

ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)';
ctx.lineWidth = 50;
ctx.moveTo(0, 20);
ctx.lineTo(100, 20);
ctx.moveTo(0, 30);
ctx.lineTo(100, 30);
ctx.stroke();

_assertPixelApprox(canvas, 50,25, 0,127,0,255, "50,25", "0,127,0,255", 1);


});

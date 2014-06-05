_addTest(function(canvas, ctx) {

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, 100, 50);

ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
ctx.rect(0, 0, 100, 50);
ctx.closePath();
ctx.rect(10, 10, 80, 30);
ctx.fill();

_assertPixelApprox(canvas, 50,25, 0,127,0,255, "50,25", "0,127,0,255", 1);


});

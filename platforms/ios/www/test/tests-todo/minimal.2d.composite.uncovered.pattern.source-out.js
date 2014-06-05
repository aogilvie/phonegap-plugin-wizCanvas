_addTest(function(canvas, ctx) {


ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'source-out';
ctx.fillStyle = ctx.createPattern(document.getElementById('yellow.png'), 'no-repeat');
ctx.fillRect(0, 50, 100, 50);
_assertPixelApprox(canvas, 50,25, 0,0,0,0, "50,25", "0,0,0,0", 5);


});

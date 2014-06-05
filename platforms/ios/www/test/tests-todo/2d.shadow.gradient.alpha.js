_addTest(function(canvas, ctx) {

var gradient = ctx.createLinearGradient(0, 0, 100, 0);
gradient.addColorStop(0, 'rgba(255,0,0,0.5)');
gradient.addColorStop(1, 'rgba(255,0,0,0.5)');
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.shadowOffsetY = 50;
ctx.shadowColor = '#00f';
ctx.fillStyle = gradient;
ctx.fillRect(0, -50, 100, 50);

_assertPixelApprox(canvas, 50,25, 127,0,127,255, "50,25", "127,0,127,255", 2);


});

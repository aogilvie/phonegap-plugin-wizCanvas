_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#f00'; // (work around broken Firefox globalAlpha caching)
ctx.shadowColor = 'rgba(0, 0, 255, 0.707)';
ctx.shadowOffsetY = 50;
ctx.globalAlpha = 0.707;
ctx.fillRect(0, -50, 100, 50);

_assertPixelApprox(canvas, 50,25, 127,0,127,255, "50,25", "127,0,127,255", 2);


});

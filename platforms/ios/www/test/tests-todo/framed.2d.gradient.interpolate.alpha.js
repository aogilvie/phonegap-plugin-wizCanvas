_addTest(function(canvas, ctx) {

ctx.fillStyle = '#ff0';
ctx.fillRect(0, 0, 100, 50);
var g = ctx.createLinearGradient(0, 0, 100, 0);
g.addColorStop(0, 'rgba(0,0,255, 0)');
g.addColorStop(1, 'rgba(0,0,255, 1)');
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);
_assertPixelApprox(canvas, 25,25, 191,191,63,255, "25,25", "191,191,63,255", 3);
_assertPixelApprox(canvas, 50,25, 127,127,127,255, "50,25", "127,127,127,255", 3);
_assertPixelApprox(canvas, 75,25, 63,63,191,255, "75,25", "63,63,191,255", 3);


});

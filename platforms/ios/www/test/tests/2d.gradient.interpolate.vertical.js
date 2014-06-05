_addTest(function(canvas, ctx) {

var g = ctx.createLinearGradient(0, 0, 0, 50);
g.addColorStop(0, '#ff0');
g.addColorStop(1, '#00f');
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);
_assertPixelApprox(canvas, 50,12, 191,191,63,255, "50,12", "191,191,63,255", 10);
_assertPixelApprox(canvas, 50,25, 127,127,127,255, "50,25", "127,127,127,255", 5);
_assertPixelApprox(canvas, 50,37, 63,63,191,255, "50,37", "63,63,191,255", 10);


});

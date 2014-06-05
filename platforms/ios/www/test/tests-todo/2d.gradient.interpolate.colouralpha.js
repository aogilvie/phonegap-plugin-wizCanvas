_addTest(function(canvas, ctx) {

var g = ctx.createLinearGradient(0, 0, 100, 0);
g.addColorStop(0, 'rgba(255,255,0, 0)');
g.addColorStop(1, 'rgba(0,0,255, 1)');
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);
_assertPixelApprox(canvas, 25,25, 191,191,63,63, "25,25", "191,191,63,63", 3);
_assertPixelApprox(canvas, 50,25, 127,127,127,127, "50,25", "127,127,127,127", 3);
_assertPixelApprox(canvas, 75,25, 63,63,191,191, "75,25", "63,63,191,191", 3);


});

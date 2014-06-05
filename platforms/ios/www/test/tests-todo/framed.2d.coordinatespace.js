_addTest(function(canvas, ctx) {

ctx.fillStyle = '#00f';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#0ff';
ctx.fillRect(0, 0, 50, 25);
_assertPixel(canvas, 25,12, 0,255,255,255, "25,12", "0,255,255,255");
_assertPixel(canvas, 75,12, 0,0,255,255, "75,12", "0,0,255,255");
_assertPixel(canvas, 25,37, 0,0,255,255, "25,37", "0,0,255,255");
_assertPixel(canvas, 75,37, 0,0,255,255, "75,37", "0,0,255,255");
_requireManualCheck(); // because we can't tell that getPixelData isn't using the wrong coordinate space too


});

_addTest(function(canvas, ctx) {


ctx.fillStyle = '#0f0';
try { ctx.fillStyle = 'rgba(255, 0, 0, 100%)'; } catch (e) { } // this shouldn't throw, but it shouldn't matter here if it does
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

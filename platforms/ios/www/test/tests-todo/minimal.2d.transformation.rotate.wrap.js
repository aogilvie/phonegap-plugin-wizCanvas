_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.rotate(Math.PI * (1 + 4096)); // == pi (mod 2*pi)
// We need about pi +/- 0.001 in order to get correct-looking results
// 32-bit floats can store pi*4097 with precision 2^-10, so that should
// be safe enough on reasonable implementations
ctx.fillStyle = '#0f0';
ctx.fillRect(-100, -50, 100, 50);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 98,2, 0,255,0,255, "98,2", "0,255,0,255");
_assertPixel(canvas, 98,47, 0,255,0,255, "98,47", "0,255,0,255");


});

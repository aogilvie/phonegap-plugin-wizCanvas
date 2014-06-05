_addTest(function(canvas, ctx) {

var gradient = ctx.createLinearGradient(0, 0, 100, 0);
gradient.addColorStop(0, '#f00');
gradient.addColorStop(0.499, '#f00');
gradient.addColorStop(0.5, 'rgba(0,0,0,0)');
gradient.addColorStop(1, 'rgba(0,0,0,0)');
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 50, 50);
ctx.fillStyle = '#0f0';
ctx.fillRect(50, 0, 50, 50);
ctx.shadowOffsetY = 50;
ctx.shadowColor = '#0f0';
ctx.fillStyle = gradient;
ctx.fillRect(0, -50, 100, 50);

_assertPixel(canvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255");
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");


});

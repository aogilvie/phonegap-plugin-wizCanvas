_addTest(function(canvas, ctx) {

var ctx2 = canvas.getContext('2d');
ctx.fillStyle = '#f00';
ctx2.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

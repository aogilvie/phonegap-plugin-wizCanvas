_addTest(function(canvas, ctx) {

var canvas2 = document.createElement('canvas');
canvas2.width = 100;
canvas2.height = 50;
var pattern = ctx.createPattern(canvas2, 'no-repeat');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, 100, 50);

_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 98,1, 0,255,0,255, "98,1", "0,255,0,255");
_assertPixel(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");
_assertPixel(canvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");


});

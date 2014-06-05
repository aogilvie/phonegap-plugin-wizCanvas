_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

var canvas2 = document.createElement('canvas');
canvas2.width = 100;
canvas2.height = 50;
var ctx2 = canvas2.getContext('2d');
ctx2.fillStyle = '#f00';
ctx2.fillRect(0, 0, 100, 25);
ctx2.fillStyle = '#0f0';
ctx2.fillRect(0, 25, 100, 25);

var pattern = ctx.createPattern(canvas2, 'no-repeat');
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 25);

_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 98,1, 0,255,0,255, "98,1", "0,255,0,255");
_assertPixel(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");
_assertPixel(canvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");


});

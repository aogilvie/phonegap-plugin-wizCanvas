_addTest(function(canvas, ctx) {

var canvas2 = document.createElement('canvas');
canvas2.width = 100;
canvas2.height = 50;
var ctx2 = canvas2.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.shadowColor = '#f00';
ctx.shadowOffsetY = 50;
ctx.drawImage(canvas2, 0, -50);

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

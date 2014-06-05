_addTest(function(canvas, ctx) {

var canvas2 = document.createElement('canvas');
canvas2.width = 100;
canvas2.height = 50;
var ctx2 = canvas2.getContext('2d');
ctx2.fillStyle = 'rgba(255, 0, 0, 0.5)';
ctx2.fillRect(0, 0, 100, 50);

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.shadowOffsetY = 50;
ctx.shadowColor = '#00f';
ctx.drawImage(canvas2, 0, -50);

_assertPixelApprox(canvas, 50,25, 127,0,127,255, "50,25", "127,0,127,255", 2);


});

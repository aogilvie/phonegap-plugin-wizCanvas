_addTest(function(canvas, ctx) {

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
var g = document.createElement('canvas').getContext('2d').createLinearGradient(0, 0, 100, 0);
g.addColorStop(0, '#0f0');
g.addColorStop(1, '#0f0');
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);
_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);


});

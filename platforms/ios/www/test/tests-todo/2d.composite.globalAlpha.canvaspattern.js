_addTest(function(canvas, ctx) {

var canvas2 = document.createElement('canvas');
canvas2.width = 100;
canvas2.height = 50;
var ctx2 = canvas2.getContext('2d');
ctx2.fillStyle = '#f00';
ctx2.fillRect(0, 0, 100, 50);

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = ctx.createPattern(canvas2, 'no-repeat');
ctx.globalAlpha = 0.01; // avoid any potential alpha=0 optimisations
ctx.fillRect(0, 0, 100, 50);
_assertPixelApprox(canvas, 50,25, 2,253,0,255, "50,25", "2,253,0,255", 2);


});

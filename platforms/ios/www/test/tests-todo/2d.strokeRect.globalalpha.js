_addTest(function(canvas, ctx) {

ctx.globalAlpha = 0;
ctx.strokeStyle = '#f00';
ctx.lineWidth = 50;
ctx.strokeRect(25, 24, 50, 2);
_assertPixel(canvas, 50,25, 0,0,0,0, "50,25", "0,0,0,0");


});

_addTest(function(canvas, ctx) {

var canvas2 = document.createElement('canvas');
canvas2.width = 100;
canvas2.height = 50;
var ctx2 = canvas2.getContext('2d');
ctx2.fillStyle = '#0f0';
ctx2.fillRect(0, 0, 100, 50);
var p = ctx.createPattern(canvas2, 'repeat');
ctx2.drawImage(document.getElementById('yellow.png'), 0, 0); // make canvas2 origin-unclean
ctx.fillStyle = p;
ctx.fillRect(0, 0, 100, 50);
canvas.toDataURL();
ctx.getImageData(0, 0, 1, 1);
_assert(true, "true"); // okay if there was no exception


});

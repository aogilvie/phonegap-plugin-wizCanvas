_addTest(function(canvas, ctx) {

// Try not to let it undetectably incorrectly pick up opaque-black
// from other parts of the document:
document.body.parentNode.setAttribute('style', 'color: #f00');
document.body.setAttribute('style', 'color: #f00');
canvas.setAttribute('style', 'color: #f00');

var canvas2 = document.createElement('canvas');
var ctx2 = canvas2.getContext('2d');
ctx2.fillStyle = '#f00';
ctx2.fillStyle = 'currentColor';
ctx2.fillRect(0, 0, 100, 50);
ctx.drawImage(canvas2, 0, 0);

document.body.parentNode.removeAttribute('style');
document.body.removeAttribute('style');

_assertPixel(canvas, 50,25, 0,0,0,255, "50,25", "0,0,0,255");


});

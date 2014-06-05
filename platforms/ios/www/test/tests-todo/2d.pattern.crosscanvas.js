_addTest(function(canvas, ctx) {

var img = document.getElementById('green.png');

var pattern = document.createElement('canvas').getContext('2d').createPattern(img, 'no-repeat');
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, 100, 50);

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

_addTest(function(canvas, ctx) {

var pattern = ctx.createPattern(document.getElementById('transparent50.png'), 'repeat');
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.shadowOffsetY = 50;
ctx.shadowColor = '#00f';
ctx.fillStyle = pattern;
ctx.fillRect(0, -50, 100, 50);

_assertPixelApprox(canvas, 50,25, 127,0,127,255, "50,25", "127,0,127,255", 2);


});

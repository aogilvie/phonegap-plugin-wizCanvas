_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.strokeStyle = '#f00';
ctx.lineWidth = 100;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

ctx.beginPath();
ctx.rect(50, 25, 0, 0);
ctx.stroke();

ctx.strokeRect(50, 25, 0, 0);

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.strokeStyle = '#f00';
ctx.lineWidth = 100;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

ctx.beginPath();
ctx.moveTo(50, 25);
ctx.arcTo(50, 25, 150, 25, 10);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 25);
ctx.arc(50, 25, 10, 0, 0, false);
ctx.stroke();

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

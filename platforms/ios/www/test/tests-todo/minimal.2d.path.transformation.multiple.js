_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);

ctx.fillStyle = '#f00';    
ctx.translate(-100, 0);
ctx.rect(0, 0, 100, 50);
ctx.fill();
ctx.translate(100, 0);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = '#f00';
ctx.lineWidth = 50;
ctx.translate(0, -50);
ctx.moveTo(0, 25);
ctx.lineTo(100, 25);
ctx.stroke();
ctx.translate(0, 50);
ctx.stroke();

_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");


});

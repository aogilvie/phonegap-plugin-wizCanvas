_addTest(function(canvas, ctx) {

ctx.fillStyle = '#ff0';
ctx.fillRect(0, 0, 25, 40);
ctx.fillStyle = '#0ff';
ctx.fillRect(25, 0, 50, 40);
ctx.fillStyle = '#00f';
ctx.fillRect(75, 0, 25, 40);
ctx.fillStyle = '#fff';
ctx.fillRect(0, 40, 100, 10);
var data = canvas.toDataURL();
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
var img = new Image();
deferTest();
img.onload = wrapFunction(function ()
{
    ctx.drawImage(img, 0, 0);
    
    _assertPixel(canvas, 12,20, 255,255,0,255, "12,20", "255,255,0,255");
    _assertPixel(canvas, 50,20, 0,255,255,255, "50,20", "0,255,255,255");
    _assertPixel(canvas, 87,20, 0,0,255,255, "87,20", "0,0,255,255");
    _assertPixel(canvas, 50,45, 255,255,255,255, "50,45", "255,255,255,255");
});
img.src = data;


});

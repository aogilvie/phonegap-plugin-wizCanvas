_addTest(function(canvas, ctx) {

var img = document.getElementById('green.png');
var pattern = ctx.createPattern(img, 'no-repeat');
deferTest();
img.onload = wrapFunction(function ()
{
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 100, 50);

    _assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
    _assertPixel(canvas, 98,1, 0,255,0,255, "98,1", "0,255,0,255");
    _assertPixel(canvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");
    _assertPixel(canvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");
});
img.src = '../images/red.png';


});

_addTest(function(canvas, ctx) {

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50)
ctx.fillStyle = '#f00';
ctx.fillRect(45, 20, 10, 10)
var imgdata = ctx.getImageData(45, 20, 10, 10);
for (var i = 0, len = imgdata.width*imgdata.height*4; i < len; i += 4)
{
    imgdata.data[i] = 0;
    imgdata.data[i+1] = 255;
}
ctx.putImageData(imgdata, 45, 20);
_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);


});

_addTest(function(canvas, ctx) {

var imgdata = ctx.createImageData(100, 50);
for (var i = 0; i < imgdata.data.length; i += 4) {
    imgdata.data[i] = 0;
    imgdata.data[i+1] = 255;
    imgdata.data[i+2] = 0;
    imgdata.data[i+3] = 255;
}
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50)
ctx.putImageData(imgdata, 0, 0);
_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);


});

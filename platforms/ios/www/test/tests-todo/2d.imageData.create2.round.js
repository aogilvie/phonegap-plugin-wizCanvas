_addTest(function(canvas, ctx) {

var imgdata1 = ctx.createImageData(10.01, 10.99);
var imgdata2 = ctx.getImageData(0, 0, 10.01, 10.99);
_assertEqual(imgdata1.width, imgdata2.width, "imgdata1.width", "imgdata2.width");
_assertEqual(imgdata1.height, imgdata2.height, "imgdata1.height", "imgdata2.height");


});

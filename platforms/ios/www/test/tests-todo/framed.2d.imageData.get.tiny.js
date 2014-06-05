_addTest(function(canvas, ctx) {

var imgdata = ctx.getImageData(0, 0, 0.0001, 0.0001);
_assertEqual(imgdata.data.length, imgdata.width*imgdata.height*4, "imgdata.data.length", "imgdata.width*imgdata.height*4");
_assertEqual(imgdata.width, 1, "imgdata.width", "1");
_assertEqual(imgdata.height, 1, "imgdata.height", "1");


});

_addTest(function(canvas, ctx) {

var imgdata = ctx.getImageData(0, 0, 10, 10);
_assertEqual(imgdata.data.length, imgdata.width*imgdata.height*4, "imgdata.data.length", "imgdata.width*imgdata.height*4");


});

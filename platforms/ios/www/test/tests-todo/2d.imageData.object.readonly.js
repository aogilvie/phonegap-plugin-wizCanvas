_addTest(function(canvas, ctx) {

var imgdata = ctx.getImageData(0, 0, 10, 10);
var w = imgdata.width;
var h = imgdata.height;
var d = imgdata.data;
imgdata.width = 123;
imgdata.height = 123;
imgdata.data = [100,100,100,100];
_assertSame(imgdata.width, w, "imgdata.width", "w");
_assertSame(imgdata.height, h, "imgdata.height", "h");
_assertSame(imgdata.data, d, "imgdata.data", "d");
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");
_assertSame(imgdata.data[1], 0, "imgdata.data[\""+(1)+"\"]", "0");
_assertSame(imgdata.data[2], 0, "imgdata.data[\""+(2)+"\"]", "0");
_assertSame(imgdata.data[3], 0, "imgdata.data[\""+(3)+"\"]", "0");


});

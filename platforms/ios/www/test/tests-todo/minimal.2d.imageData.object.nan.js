_addTest(function(canvas, ctx) {

var imgdata = ctx.getImageData(0, 0, 10, 10);
imgdata.data[0] = 100;
imgdata.data[0] = NaN;
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");
imgdata.data[0] = 100;
imgdata.data[0] = "cheese";
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");


});

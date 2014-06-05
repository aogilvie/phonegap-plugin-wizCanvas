_addTest(function(canvas, ctx) {

var imgdata = ctx.getImageData(0, 0, 10, 10);
imgdata.data[0] = 100;
imgdata.data[0] = "110";
_assertSame(imgdata.data[0], 110, "imgdata.data[\""+(0)+"\"]", "110");
imgdata.data[0] = 100;
imgdata.data[0] = "0x78";
_assertSame(imgdata.data[0], 120, "imgdata.data[\""+(0)+"\"]", "120");
imgdata.data[0] = 100;
imgdata.data[0] = " +130e0 ";
_assertSame(imgdata.data[0], 130, "imgdata.data[\""+(0)+"\"]", "130");


});

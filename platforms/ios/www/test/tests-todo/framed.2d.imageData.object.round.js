_addTest(function(canvas, ctx) {

var imgdata = ctx.getImageData(0, 0, 10, 10);
imgdata.data[0] = 0.499;
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");
imgdata.data[0] = 0.5;
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");
imgdata.data[0] = 0.501;
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");
imgdata.data[0] = 1.499;
_assertSame(imgdata.data[0], 1, "imgdata.data[\""+(0)+"\"]", "1");
imgdata.data[0] = 1.5;
_assertSame(imgdata.data[0], 1, "imgdata.data[\""+(0)+"\"]", "1");
imgdata.data[0] = 1.501;
_assertSame(imgdata.data[0], 1, "imgdata.data[\""+(0)+"\"]", "1");
imgdata.data[0] = 2.5;
_assertSame(imgdata.data[0], 2, "imgdata.data[\""+(0)+"\"]", "2");
imgdata.data[0] = 3.5;
_assertSame(imgdata.data[0], 3, "imgdata.data[\""+(0)+"\"]", "3");
imgdata.data[0] = 252.5;
_assertSame(imgdata.data[0], 252, "imgdata.data[\""+(0)+"\"]", "252");
imgdata.data[0] = 253.5;
_assertSame(imgdata.data[0], 253, "imgdata.data[\""+(0)+"\"]", "253");
imgdata.data[0] = 254.5;
_assertSame(imgdata.data[0], 254, "imgdata.data[\""+(0)+"\"]", "254");
imgdata.data[0] = 256.5;
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");
imgdata.data[0] = -0.5;
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");
imgdata.data[0] = -1.5;
_assertSame(imgdata.data[0], 255, "imgdata.data[\""+(0)+"\"]", "255");


});

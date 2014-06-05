_addTest(function(canvas, ctx) {

var imgdata = ctx.getImageData(0, 0, 10, 10);

imgdata.data[0] = 0;
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");
imgdata.data[0] = 300;
_assertSame(imgdata.data[0], 44, "imgdata.data[\""+(0)+"\"]", "44");
imgdata.data[0] = -100;
_assertSame(imgdata.data[0], 156, "imgdata.data[\""+(0)+"\"]", "156");

imgdata.data[0] = 200+Math.pow(2, 32);
_assertSame(imgdata.data[0], 200, "imgdata.data[\""+(0)+"\"]", "200");
imgdata.data[0] = -200-Math.pow(2, 32);
_assertSame(imgdata.data[0], 56, "imgdata.data[\""+(0)+"\"]", "56");

imgdata.data[0] = -Infinity;
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");
imgdata.data[0] = Infinity;
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");


});

_addTest(function(canvas, ctx) {

ctx.fillStyle = '#08f';
ctx.fillRect(0, 0, 100, 50);

var imgdata1 = ctx.getImageData(-10, 5, 1, 1);
_assertSame(imgdata1.data[0], 0, "imgdata1.data[\""+(0)+"\"]", "0");
_assertSame(imgdata1.data[1], 0, "imgdata1.data[\""+(1)+"\"]", "0");
_assertSame(imgdata1.data[2], 0, "imgdata1.data[\""+(2)+"\"]", "0");
_assertSame(imgdata1.data[3], 0, "imgdata1.data[\""+(3)+"\"]", "0");

var imgdata2 = ctx.getImageData(10, -5, 1, 1);
_assertSame(imgdata2.data[0], 0, "imgdata2.data[\""+(0)+"\"]", "0");
_assertSame(imgdata2.data[1], 0, "imgdata2.data[\""+(1)+"\"]", "0");
_assertSame(imgdata2.data[2], 0, "imgdata2.data[\""+(2)+"\"]", "0");
_assertSame(imgdata2.data[3], 0, "imgdata2.data[\""+(3)+"\"]", "0");

var imgdata3 = ctx.getImageData(200, 5, 1, 1);
_assertSame(imgdata3.data[0], 0, "imgdata3.data[\""+(0)+"\"]", "0");
_assertSame(imgdata3.data[1], 0, "imgdata3.data[\""+(1)+"\"]", "0");
_assertSame(imgdata3.data[2], 0, "imgdata3.data[\""+(2)+"\"]", "0");
_assertSame(imgdata3.data[3], 0, "imgdata3.data[\""+(3)+"\"]", "0");

var imgdata4 = ctx.getImageData(10, 60, 1, 1);
_assertSame(imgdata4.data[0], 0, "imgdata4.data[\""+(0)+"\"]", "0");
_assertSame(imgdata4.data[1], 0, "imgdata4.data[\""+(1)+"\"]", "0");
_assertSame(imgdata4.data[2], 0, "imgdata4.data[\""+(2)+"\"]", "0");
_assertSame(imgdata4.data[3], 0, "imgdata4.data[\""+(3)+"\"]", "0");


});

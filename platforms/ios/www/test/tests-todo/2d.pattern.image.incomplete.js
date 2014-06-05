_addTest(function(canvas, ctx) {

var img = new Image();
_assertSame(img.complete, false, "img.complete", "false");
_assertSame(ctx.createPattern(img, 'repeat'), null, "ctx.createPattern(img, 'repeat')", "null");


});

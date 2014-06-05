_addTest(function(canvas, ctx) {

var img = document.getElementById('broken.png');
_assertSame(img.complete, false, "img.complete", "false");
_assertSame(ctx.createPattern(img, 'repeat'), null, "ctx.createPattern(img, 'repeat')", "null");


});

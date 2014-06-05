_addTest(function(canvas, ctx) {

_assertDifferent(ctx.createImageData(ctx.createImageData(1, 1)), null, "ctx.createImageData(ctx.createImageData(1, 1))", "null");


});

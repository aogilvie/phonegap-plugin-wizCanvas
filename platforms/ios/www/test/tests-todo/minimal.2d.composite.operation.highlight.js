_addTest(function(canvas, ctx) {

ctx.globalCompositeOperation = 'xor';
ctx.globalCompositeOperation = 'highlight';
_assertEqual(ctx.globalCompositeOperation, 'xor', "ctx.globalCompositeOperation", "'xor'");


});

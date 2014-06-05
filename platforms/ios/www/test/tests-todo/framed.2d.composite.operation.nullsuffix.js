_addTest(function(canvas, ctx) {

ctx.globalCompositeOperation = 'xor';
ctx.globalCompositeOperation = 'source-over\0';
_assertEqual(ctx.globalCompositeOperation, 'xor', "ctx.globalCompositeOperation", "'xor'");


});

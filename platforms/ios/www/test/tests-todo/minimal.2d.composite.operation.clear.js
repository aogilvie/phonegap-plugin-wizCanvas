_addTest(function(canvas, ctx) {

ctx.globalCompositeOperation = 'xor';
ctx.globalCompositeOperation = 'clear';
_assertEqual(ctx.globalCompositeOperation, 'xor', "ctx.globalCompositeOperation", "'xor'");


});

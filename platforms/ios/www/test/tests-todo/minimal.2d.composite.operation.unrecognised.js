_addTest(function(canvas, ctx) {

ctx.globalCompositeOperation = 'xor';
ctx.globalCompositeOperation = 'nonexistent';
_assertEqual(ctx.globalCompositeOperation, 'xor', "ctx.globalCompositeOperation", "'xor'");


});

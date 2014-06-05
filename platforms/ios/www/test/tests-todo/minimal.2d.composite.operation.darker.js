_addTest(function(canvas, ctx) {

ctx.globalCompositeOperation = 'xor';
ctx.globalCompositeOperation = 'darker';
_assertEqual(ctx.globalCompositeOperation, 'xor', "ctx.globalCompositeOperation", "'xor'");


});

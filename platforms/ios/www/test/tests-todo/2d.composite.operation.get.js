_addTest(function(canvas, ctx) {

var modes = ['source-atop', 'source-in', 'source-out', 'source-over',
    'destination-atop', 'destination-in', 'destination-out', 'destination-over',
    'lighter', 'copy', 'xor'];
for (var i = 0; i < modes.length; ++i)
{
    ctx.globalCompositeOperation = modes[i];
    _assertEqual(ctx.globalCompositeOperation, modes[i], "ctx.globalCompositeOperation", "modes[\""+(i)+"\"]");
}


});

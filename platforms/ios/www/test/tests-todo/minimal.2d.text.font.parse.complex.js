_addTest(function(canvas, ctx) {

ctx.font = 'small-caps italic 400 12px/2 Unknown Font, sans-serif';
_assertSame(ctx.font, 'italic small-caps 12px "Unknown Font", sans-serif', "ctx.font", "'italic small-caps 12px \"Unknown Font\", sans-serif'");


});

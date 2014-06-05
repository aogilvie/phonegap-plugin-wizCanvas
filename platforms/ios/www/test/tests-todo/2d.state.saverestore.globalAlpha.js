_addTest(function(canvas, ctx) {

// Test that restore() undoes any modifications
var old = ctx.globalAlpha;
ctx.save();
ctx.globalAlpha = 0.5;
ctx.restore();
_assertSame(ctx.globalAlpha, old, "ctx.globalAlpha", "old");

// Also test that save() doesn't modify the values
ctx.globalAlpha = 0.5;
old = ctx.globalAlpha;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against 0.5
ctx.save();
_assertSame(ctx.globalAlpha, old, "ctx.globalAlpha", "old");
ctx.restore();


});

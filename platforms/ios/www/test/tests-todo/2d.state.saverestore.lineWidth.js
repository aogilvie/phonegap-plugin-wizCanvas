_addTest(function(canvas, ctx) {

// Test that restore() undoes any modifications
var old = ctx.lineWidth;
ctx.save();
ctx.lineWidth = 0.5;
ctx.restore();
_assertSame(ctx.lineWidth, old, "ctx.lineWidth", "old");

// Also test that save() doesn't modify the values
ctx.lineWidth = 0.5;
old = ctx.lineWidth;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against 0.5
ctx.save();
_assertSame(ctx.lineWidth, old, "ctx.lineWidth", "old");
ctx.restore();


});

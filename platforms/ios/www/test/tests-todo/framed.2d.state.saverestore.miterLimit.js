_addTest(function(canvas, ctx) {

// Test that restore() undoes any modifications
var old = ctx.miterLimit;
ctx.save();
ctx.miterLimit = 0.5;
ctx.restore();
_assertSame(ctx.miterLimit, old, "ctx.miterLimit", "old");

// Also test that save() doesn't modify the values
ctx.miterLimit = 0.5;
old = ctx.miterLimit;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against 0.5
ctx.save();
_assertSame(ctx.miterLimit, old, "ctx.miterLimit", "old");
ctx.restore();


});

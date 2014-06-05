_addTest(function(canvas, ctx) {

// Test that restore() undoes any modifications
var old = ctx.shadowBlur;
ctx.save();
ctx.shadowBlur = 5;
ctx.restore();
_assertSame(ctx.shadowBlur, old, "ctx.shadowBlur", "old");

// Also test that save() doesn't modify the values
ctx.shadowBlur = 5;
old = ctx.shadowBlur;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against 5
ctx.save();
_assertSame(ctx.shadowBlur, old, "ctx.shadowBlur", "old");
ctx.restore();


});

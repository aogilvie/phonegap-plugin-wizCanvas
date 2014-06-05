_addTest(function(canvas, ctx) {

// Test that restore() undoes any modifications
var old = ctx.textBaseline;
ctx.save();
ctx.textBaseline = "bottom";
ctx.restore();
_assertSame(ctx.textBaseline, old, "ctx.textBaseline", "old");

// Also test that save() doesn't modify the values
ctx.textBaseline = "bottom";
old = ctx.textBaseline;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against "bottom"
ctx.save();
_assertSame(ctx.textBaseline, old, "ctx.textBaseline", "old");
ctx.restore();


});

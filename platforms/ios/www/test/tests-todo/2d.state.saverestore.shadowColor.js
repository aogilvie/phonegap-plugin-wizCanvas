_addTest(function(canvas, ctx) {

// Test that restore() undoes any modifications
var old = ctx.shadowColor;
ctx.save();
ctx.shadowColor = "#ff0000";
ctx.restore();
_assertSame(ctx.shadowColor, old, "ctx.shadowColor", "old");

// Also test that save() doesn't modify the values
ctx.shadowColor = "#ff0000";
old = ctx.shadowColor;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against "#ff0000"
ctx.save();
_assertSame(ctx.shadowColor, old, "ctx.shadowColor", "old");
ctx.restore();


});

_addTest(function(canvas, ctx) {

// Test that restore() undoes any modifications
var old = ctx.strokeStyle;
ctx.save();
ctx.strokeStyle = "#ff0000";
ctx.restore();
_assertSame(ctx.strokeStyle, old, "ctx.strokeStyle", "old");

// Also test that save() doesn't modify the values
ctx.strokeStyle = "#ff0000";
old = ctx.strokeStyle;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against "#ff0000"
ctx.save();
_assertSame(ctx.strokeStyle, old, "ctx.strokeStyle", "old");
ctx.restore();


});

_addTest(function(canvas, ctx) {

// Test that restore() undoes any modifications
var old = ctx.fillStyle;
ctx.save();
ctx.fillStyle = "#ff0000";
ctx.restore();
_assertSame(ctx.fillStyle, old, "ctx.fillStyle", "old");

// Also test that save() doesn't modify the values
ctx.fillStyle = "#ff0000";
old = ctx.fillStyle;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against "#ff0000"
ctx.save();
_assertSame(ctx.fillStyle, old, "ctx.fillStyle", "old");
ctx.restore();


});

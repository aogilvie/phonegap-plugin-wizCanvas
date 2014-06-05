_addTest(function(canvas, ctx) {

// Test that restore() undoes any modifications
var old = ctx.font;
ctx.save();
ctx.font = "25px serif";
ctx.restore();
_assertSame(ctx.font, old, "ctx.font", "old");

// Also test that save() doesn't modify the values
ctx.font = "25px serif";
old = ctx.font;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against "25px serif"
ctx.save();
_assertSame(ctx.font, old, "ctx.font", "old");
ctx.restore();


});

_addTest(function(canvas, ctx) {

// Test that restore() undoes any modifications
var old = ctx.textAlign;
ctx.save();
ctx.textAlign = "center";
ctx.restore();
_assertSame(ctx.textAlign, old, "ctx.textAlign", "old");

// Also test that save() doesn't modify the values
ctx.textAlign = "center";
old = ctx.textAlign;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against "center"
ctx.save();
_assertSame(ctx.textAlign, old, "ctx.textAlign", "old");
ctx.restore();


});

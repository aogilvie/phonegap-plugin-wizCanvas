_addTest(function(canvas, ctx) {

// Test that restore() undoes any modifications
var old = ctx.lineCap;
ctx.save();
ctx.lineCap = "round";
ctx.restore();
_assertSame(ctx.lineCap, old, "ctx.lineCap", "old");

// Also test that save() doesn't modify the values
ctx.lineCap = "round";
old = ctx.lineCap;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against "round"
ctx.save();
_assertSame(ctx.lineCap, old, "ctx.lineCap", "old");
ctx.restore();


});

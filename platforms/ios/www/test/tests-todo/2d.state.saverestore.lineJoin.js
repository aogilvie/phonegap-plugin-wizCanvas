_addTest(function(canvas, ctx) {

// Test that restore() undoes any modifications
var old = ctx.lineJoin;
ctx.save();
ctx.lineJoin = "round";
ctx.restore();
_assertSame(ctx.lineJoin, old, "ctx.lineJoin", "old");

// Also test that save() doesn't modify the values
ctx.lineJoin = "round";
old = ctx.lineJoin;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against "round"
ctx.save();
_assertSame(ctx.lineJoin, old, "ctx.lineJoin", "old");
ctx.restore();


});

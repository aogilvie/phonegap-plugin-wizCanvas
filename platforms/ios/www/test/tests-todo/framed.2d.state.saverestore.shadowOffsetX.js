_addTest(function(canvas, ctx) {

// Test that restore() undoes any modifications
var old = ctx.shadowOffsetX;
ctx.save();
ctx.shadowOffsetX = 5;
ctx.restore();
_assertSame(ctx.shadowOffsetX, old, "ctx.shadowOffsetX", "old");

// Also test that save() doesn't modify the values
ctx.shadowOffsetX = 5;
old = ctx.shadowOffsetX;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against 5
ctx.save();
_assertSame(ctx.shadowOffsetX, old, "ctx.shadowOffsetX", "old");
ctx.restore();


});

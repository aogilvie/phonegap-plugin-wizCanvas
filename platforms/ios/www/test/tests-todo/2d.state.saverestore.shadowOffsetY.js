_addTest(function(canvas, ctx) {

// Test that restore() undoes any modifications
var old = ctx.shadowOffsetY;
ctx.save();
ctx.shadowOffsetY = 5;
ctx.restore();
_assertSame(ctx.shadowOffsetY, old, "ctx.shadowOffsetY", "old");

// Also test that save() doesn't modify the values
ctx.shadowOffsetY = 5;
old = ctx.shadowOffsetY;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against 5
ctx.save();
_assertSame(ctx.shadowOffsetY, old, "ctx.shadowOffsetY", "old");
ctx.restore();


});

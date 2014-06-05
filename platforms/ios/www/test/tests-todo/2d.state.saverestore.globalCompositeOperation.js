_addTest(function(canvas, ctx) {

// Test that restore() undoes any modifications
var old = ctx.globalCompositeOperation;
ctx.save();
ctx.globalCompositeOperation = "copy";
ctx.restore();
_assertSame(ctx.globalCompositeOperation, old, "ctx.globalCompositeOperation", "old");

// Also test that save() doesn't modify the values
ctx.globalCompositeOperation = "copy";
old = ctx.globalCompositeOperation;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against "copy"
ctx.save();
_assertSame(ctx.globalCompositeOperation, old, "ctx.globalCompositeOperation", "old");
ctx.restore();


});

_addTest(function(canvas, ctx) {

ctx.fillStyle = 'rgba(255,255,255,0.45)';
_assertMatch(ctx.fillStyle, /^rgba\(255, 255, 255, 0\.4\d+\)$/, "ctx.fillStyle", "/^rgba\\(255, 255, 255, 0\\.4\\d+\\)$/");


});

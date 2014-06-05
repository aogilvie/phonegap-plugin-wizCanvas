_addTest(function(canvas, ctx) {


ctx.fillStyle = '#f00';
ctx.fillStyle = 'ThreeDDarkShadow';
_assertMatch(ctx.fillStyle, /^#(?!(FF0000|ff0000|f00)$)/, "ctx.fillStyle", "/^#(?!(FF0000|ff0000|f00)$)/"); // test that it's not red


});

_addTest(function(canvas, ctx) {

_assertSame(canvas.getContext("2\uFF44"), null, "canvas.getContext(\"2\\uFF44\")", "null"); // Fullwidth Latin Small Letter D


});

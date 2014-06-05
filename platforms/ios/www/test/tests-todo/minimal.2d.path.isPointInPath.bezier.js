_addTest(function(canvas, ctx) {

ctx.moveTo(25, 25);
ctx.bezierCurveTo(50, -50, 50, 100, 75, 25);
_assertEqual(ctx.isPointInPath(25, 20), false, "ctx.isPointInPath(25, 20)", "false");
_assertEqual(ctx.isPointInPath(25, 30), false, "ctx.isPointInPath(25, 30)", "false");
_assertEqual(ctx.isPointInPath(30, 20), true, "ctx.isPointInPath(30, 20)", "true");
_assertEqual(ctx.isPointInPath(30, 30), false, "ctx.isPointInPath(30, 30)", "false");
_assertEqual(ctx.isPointInPath(40, 2), false, "ctx.isPointInPath(40, 2)", "false");
_assertEqual(ctx.isPointInPath(40, 20), true, "ctx.isPointInPath(40, 20)", "true");
_assertEqual(ctx.isPointInPath(40, 30), false, "ctx.isPointInPath(40, 30)", "false");
_assertEqual(ctx.isPointInPath(40, 47), false, "ctx.isPointInPath(40, 47)", "false");
_assertEqual(ctx.isPointInPath(45, 20), true, "ctx.isPointInPath(45, 20)", "true");
_assertEqual(ctx.isPointInPath(45, 30), false, "ctx.isPointInPath(45, 30)", "false");
_assertEqual(ctx.isPointInPath(55, 20), false, "ctx.isPointInPath(55, 20)", "false");
_assertEqual(ctx.isPointInPath(55, 30), true, "ctx.isPointInPath(55, 30)", "true");
_assertEqual(ctx.isPointInPath(60, 2), false, "ctx.isPointInPath(60, 2)", "false");
_assertEqual(ctx.isPointInPath(60, 20), false, "ctx.isPointInPath(60, 20)", "false");
_assertEqual(ctx.isPointInPath(60, 30), true, "ctx.isPointInPath(60, 30)", "true");
_assertEqual(ctx.isPointInPath(60, 47), false, "ctx.isPointInPath(60, 47)", "false");
_assertEqual(ctx.isPointInPath(70, 20), false, "ctx.isPointInPath(70, 20)", "false");
_assertEqual(ctx.isPointInPath(70, 30), true, "ctx.isPointInPath(70, 30)", "true");
_assertEqual(ctx.isPointInPath(75, 20), false, "ctx.isPointInPath(75, 20)", "false");
_assertEqual(ctx.isPointInPath(75, 30), false, "ctx.isPointInPath(75, 30)", "false");


});

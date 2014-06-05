_addTest(function(canvas, ctx) {

canvas.width = 100;
var default_val;

default_val = ctx.strokeStyle;
ctx.strokeStyle = "#ff0000";
canvas.width = 100;
_assertSame(ctx.strokeStyle, default_val, "ctx.strokeStyle", "default_val");

default_val = ctx.fillStyle;
ctx.fillStyle = "#ff0000";
canvas.width = 100;
_assertSame(ctx.fillStyle, default_val, "ctx.fillStyle", "default_val");

default_val = ctx.globalAlpha;
ctx.globalAlpha = 0.5;
canvas.width = 100;
_assertSame(ctx.globalAlpha, default_val, "ctx.globalAlpha", "default_val");

default_val = ctx.lineWidth;
ctx.lineWidth = 0.5;
canvas.width = 100;
_assertSame(ctx.lineWidth, default_val, "ctx.lineWidth", "default_val");

default_val = ctx.lineCap;
ctx.lineCap = "round";
canvas.width = 100;
_assertSame(ctx.lineCap, default_val, "ctx.lineCap", "default_val");

default_val = ctx.lineJoin;
ctx.lineJoin = "round";
canvas.width = 100;
_assertSame(ctx.lineJoin, default_val, "ctx.lineJoin", "default_val");

default_val = ctx.miterLimit;
ctx.miterLimit = 0.5;
canvas.width = 100;
_assertSame(ctx.miterLimit, default_val, "ctx.miterLimit", "default_val");

default_val = ctx.shadowOffsetX;
ctx.shadowOffsetX = 5;
canvas.width = 100;
_assertSame(ctx.shadowOffsetX, default_val, "ctx.shadowOffsetX", "default_val");

default_val = ctx.shadowOffsetY;
ctx.shadowOffsetY = 5;
canvas.width = 100;
_assertSame(ctx.shadowOffsetY, default_val, "ctx.shadowOffsetY", "default_val");

default_val = ctx.shadowBlur;
ctx.shadowBlur = 5;
canvas.width = 100;
_assertSame(ctx.shadowBlur, default_val, "ctx.shadowBlur", "default_val");

default_val = ctx.shadowColor;
ctx.shadowColor = "#ff0000";
canvas.width = 100;
_assertSame(ctx.shadowColor, default_val, "ctx.shadowColor", "default_val");

default_val = ctx.globalCompositeOperation;
ctx.globalCompositeOperation = "copy";
canvas.width = 100;
_assertSame(ctx.globalCompositeOperation, default_val, "ctx.globalCompositeOperation", "default_val");

default_val = ctx.font;
ctx.font = "25px serif";
canvas.width = 100;
_assertSame(ctx.font, default_val, "ctx.font", "default_val");

default_val = ctx.textAlign;
ctx.textAlign = "center";
canvas.width = 100;
_assertSame(ctx.textAlign, default_val, "ctx.textAlign", "default_val");

default_val = ctx.textBaseline;
ctx.textBaseline = "bottom";
canvas.width = 100;
_assertSame(ctx.textBaseline, default_val, "ctx.textBaseline", "default_val");


});

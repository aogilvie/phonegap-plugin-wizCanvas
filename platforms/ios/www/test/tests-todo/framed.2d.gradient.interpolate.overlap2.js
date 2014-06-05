_addTest(function(canvas, ctx) {

var g = ctx.createLinearGradient(0, 0, 100, 0);
var ps = [ 0, 1/10, 1/4, 1/3, 1/2, 3/4, 1 ];
for (var p = 0; p < ps.length; ++p)
{
        g.addColorStop(ps[p], '#0f0');
        for (var i = 0; i < 15; ++i)
                g.addColorStop(ps[p], '#f00');
        g.addColorStop(ps[p], '#0f0');
}
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 1,25, 0,255,0,255, "1,25", "0,255,0,255");
_assertPixel(canvas, 30,25, 0,255,0,255, "30,25", "0,255,0,255");
_assertPixel(canvas, 40,25, 0,255,0,255, "40,25", "0,255,0,255");
_assertPixel(canvas, 60,25, 0,255,0,255, "60,25", "0,255,0,255");
_assertPixel(canvas, 80,25, 0,255,0,255, "80,25", "0,255,0,255");


});

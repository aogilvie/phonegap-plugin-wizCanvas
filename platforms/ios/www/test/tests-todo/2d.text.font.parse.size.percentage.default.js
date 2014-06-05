_addTest(function(canvas, ctx) {

var canvas2 = document.createElement('canvas');
var ctx2 = canvas2.getContext('2d');
ctx.font = '1000% serif';
_assertSame(ctx.font, '100px serif', "ctx.font", "'100px serif'");


});

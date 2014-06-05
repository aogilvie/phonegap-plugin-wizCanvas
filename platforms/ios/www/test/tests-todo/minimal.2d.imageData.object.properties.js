_addTest(function(canvas, ctx) {

var imgdata = ctx.getImageData(0, 0, 10, 10);
_assertEqual(typeof(imgdata.width), 'number', "typeof(imgdata.width)", "'number'");
_assertEqual(typeof(imgdata.height), 'number', "typeof(imgdata.height)", "'number'");
_assertEqual(typeof(imgdata.data), 'object', "typeof(imgdata.data)", "'object'");


});

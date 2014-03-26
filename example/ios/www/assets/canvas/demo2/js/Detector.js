/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

var Detector = {

	canvas: !! window.CanvasRenderingContext2D,
	webgl: ( function () { 
		try { 
			var canvas = document.createElement( 'canvas' ); 
			return !! canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ); 
		} catch( e ) { 
			return false; 
		}
	} )(),
	workers: !! window.Worker,
	fileapi: window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage: function () {

		var element;
		
		console.log("!!!!!!!!!! ERROR WEG GL CONTEXT NOT FOUND !!!!!!!!!!");

		return element;

	},

	addGetWebGLMessage: function ( parameters ) {

		var parent, id, element;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		element = Detector.getWebGLErrorMessage();


	}

};
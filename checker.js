/*
* @Author: Ali
* @Date:   2016-08-20 05:26:39
* @Last Modified by:   Ali
* @Last Modified time: 2016-08-20 06:20:25
*/
/*This JS file is based on up and running HTML5 book*/

html5checker_init();

function html5checker_init(){
	console.log( "checking different HTML5 features ..." );
	var html5checker = {
		canvas : false
	}
	console.log( html5checker.canvas );
}

function supports_canvas(){
	/*  check the support of the canvas by creating canvas element and checking
	if there is getContext method in it*/
	html5checker.canvas == !! document.createElement( 'canvas' ).getContext;
}

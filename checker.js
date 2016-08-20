/*
* @Author: Ali
* @Date:   2016-08-20 05:26:39
* @Last Modified by:   Ali
* @Last Modified time: 2016-08-20 07:00:07
*/
/*This JS file is based on up and running HTML5 book*/

html5checker_init();

function html5checker_init(){
    console.log( "checking different HTML5 features ..." );
    var html5checker = {
        canvas : false,
        canvastext: false
    }
    console.log( "Canvas support: " html5checker.canvas );
    console.log( "Canvas text support: " html5checker.canvastext );
    }

function supports_canvas(){
    /*  check the support of the canvas by creating canvas element and checking
    if there is getContext method in it*/
    html5checker.canvas == !! document.createElement( 'canvas' ).getContext;
}

function supports_canvas_text() {
    /* canvas text api was added later, so some browsers shipped with canvas support
    before text api was complete*/
    if ( !html5checker.canvas ){
    } else {
        var context = document.createElement( 'canvas' ).getContext('2d');
        if ( typeof context.fillText == 'function') {
            html5checker.canvastext == true;
        }
        else {}
    }
}
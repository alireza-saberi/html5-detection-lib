/*
* @Author: Ali
* @Date:   2016-08-20 05:26:39
* @Last Modified by:   Ali
* @Last Modified time: 2016-08-21 10:22:48
*/
/*This JS file is based on up and running HTML5 book*/

html5checker_init();

function html5checker_init(){
    console.log( "checking different HTML5 features ..." );
    var html5checker = {
        canvas : false,
        canvastext: false,
        canplayvideo: false,
        canplaymp4: "",
        canplayogg: "",
        canplaywebm: "",
        localStorage: false

    }
    console.log( "Canvas support: " html5checker.canvas );
    console.log( "Canvas text support: " html5checker.canvastext );
    console.log( "Video support: " html5checker.canplayvideo );
    console.log( "Video/MP4 support: " html5checker.canplaymp4 );
    console.log( "Video/OGG support: " html5checker.canplayogg );
    console.log( "Video/Webm support: " html5checker.canplaywebm );
    }

function supports_canvas(){
    /*  check the support of the canvas by creating canvas element and checking
    if there is getContext method in it
    checking method : creating element, checking if certain property exist for it or not*/
    html5checker.canvas == !! document.createElement( 'canvas' ).getContext;
}

function supports_canvas_text() {
    /* canvas text api was added later, so some browsers shipped with canvas support
    before text api was complete.
    checking method : creating element, checking if certain property exist for it or not.
    Here, it's fillText*/
    if ( !html5checker.canvas ){
    } else {
        var context = document.createElement( 'canvas' ).getContext('2d');
        if ( typeof context.fillText == 'function') {
            html5checker.canvastext == true;
        }
    }
}

function support_videoplay(){
    /*It checks if the browser is capable of playing video
    checking method : creating element, checking if certain property exist for it or not.
    Here, it's canPlayType */
    if ( !!document.createElement('video').cabPlayType ) {
        html5checker.canplayvideo == true;
    }
}

function support_videoformat(){
    /*It checks if the browser is capable of running following formats
    MP4, OGG
    checking method : creating element, check if certain methods are in it, then call the method by passing certain values to them
    */
    if ( !html5checker.canplayvideo ){
        html5checker.canplaymp4 == document.createElement("video").canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
        html5checker.canplayogg == document.createElement("video").canPlayType('video/ogg; codecs="theora, vorbis"');
        html5checker.canplaywebm == document.createElement("video").canPlayType('video/webm; codecs="vp8, vorbis"');
    }
}

function support_localStorage(){
    /*It checks if the browser is supporting local storage by checking window object local storage
    checking method: if localStorage exists in window object*/
    if ( window.localStorage && 'localStorage' in window !== null ) {
        html5checker.localStorage == true;
    }
}


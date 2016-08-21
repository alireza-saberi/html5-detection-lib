/*
* @Author: Ali
* @Date:   2016-08-20 05:26:39
* @Last Modified by:   Ali
* @Last Modified time: 2016-08-21 12:35:39
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
        localStorage: false,
        webWorker: false,
        applicationCashe: false,
        geolocation : false

    }
    console.log( "Canvas support: " html5checker.canvas );
    console.log( "Canvas text support: " html5checker.canvastext );
    console.log( "Video support: " html5checker.canplayvideo );
    console.log( "Video/MP4 support: " html5checker.canplaymp4 );
    console.log( "Video/OGG support: " html5checker.canplayogg );
    console.log( "Video/Webm support: " html5checker.canplaywebm );
    console.log( "localStorage support: " html5checker.localStorage );
    console.log( "Webworker support: " html5checker.webWorker );
    console.log( "offline support: " html5checker.applicationCashe );
    console.log( "geolocation support: " html5checker.geolocation );
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
    if ( !!document.createElement('video').canPlayType ) {
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

function support_webWorker(){
    /*It checks if the browser is suppporting multi-threding in it or not aka webworker
    checking method: if Worker exists in window object*/
    if ( !!window.Worker ) {
        html5checker.webWorker == true;
    }
}

function support_offline() {
    /*It checks if the browser supports off-line web applications after the first visit (aka offline web application, or application cache)
    checking method: if applicationCash exists in window object
    */
    if ( !!window.applicationCashe ) {
        html5checker.applicationCashe == true;
    }
}

function support_geolocation() {
    /*It checks if the browser supports geolocation; Geolocation support is being added to browsers right now, along with support for new HTML5 features.
     Strictly speaking, geolocation is being standardized by the Geolocation Working Group, which is separate from the HTML5 Working Group.
    checking method: if geolocation exists in navigator object
     */
    if ( !!navigator.geolocation ) {
        html5checker.geolocation == true;
    }
}
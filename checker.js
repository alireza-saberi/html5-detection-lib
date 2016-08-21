/*
* @Author: Ali
* @Date:   2016-08-20 05:26:39
* @Last Modified by:   Ali
* @Last Modified time: 2016-08-21 16:32:30
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
        geolocation : false,
        search: false,
        number: false,
        range: false,
        color:  false,
        tel: false,
        url: false,
        email: false,
        date: false,
        month: false,
        week: false,
        time: false,
        datetime: false,
        datetime_local: false,
        placeholder: false,
        autofocus: false,
        microdata: false
    };

    supports_canvas();
    supports_canvas_text();
    support_videoplay();
    support_videoformat();
    support_localStorage();
    support_webWorker();
    support_offline();
    support_geolocation();
    support_inputAttributes();
    support_inputPlaceholder();
    support_inputAutofocus();
    support_microdata();

    console.log( "Canvas support: " + html5checker.canvas );
    console.log( "Canvas text support: " + html5checker.canvastext );
    console.log( "Video support: " + html5checker.canplayvideo );
    console.log( "Video/MP4 support: " + html5checker.canplaymp4 );
    console.log( "Video/OGG support: " + html5checker.canplayogg );
    console.log( "Video/Webm support: " + html5checker.canplaywebm );
    console.log( "localStorage support: " + html5checker.localStorage );
    console.log( "Webworker support: " + html5checker.webWorker );
    console.log( "Offline support: " + html5checker.applicationCashe );
    console.log( "Geolocation support: " + html5checker.geolocation );
    console.log( "Microdata support: " + html5checker.microdata );

    // the inputs 13 attributes
    console.log( "Checking new input attributes ..." );
    console.log( "search: " + html5checker.search );
    console.log( "number: " + html5checker.number );
    console.log( "range: " + html5checker.range );
    console.log( "color: " + html5checker.color );
    console.log( "tel: " + html5checker.tel );
    console.log( "url: " + html5checker.url );
    console.log( "email: " + html5checker.email );
    console.log( "date: " + html5checker.date );
    console.log( "month: " + html5checker.month );
    console.log( "week: " + html5checker.week );
    console.log( "time: " + html5checker.time );
    console.log( "datetime: " + html5checker.datetime );
    console.log( "datetime-local: " + html5checker.datetime_local );

    console.log( "Input placeholder: " + html5checker.placeholder );
    console.log( "Input autofocus: " + html5checker.autofocus );


    }

function supports_canvas(){
    /*  check the support of the canvas by creating canvas element and checking
    if there is getContext method in it
    checking method : creating element, checking if certain property exist for it or not*/
    html5checker.canvas == !!document.createElement( 'canvas' ).getContext;
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
    } else {
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

function support_inputAttributes() {
    /*It checks if browser supports new input attributes; search, number, range, color, tel, url, email, date, month, week, time, datetime, datetime-local
     checking method: set a property to a certain value, then check if the property has retained its value
    */
    var search = document.createElement("input").setAttribute("type", "search");
    var number = document.createElement("input").setAttribute("type", "number");
    var range = document.createElement("input").setAttribute("type", "range");
    var color = document.createElement("input").setAttribute("type", "color");
    var tel = document.createElement("input").setAttribute("type", "tel");
    var url = document.createElement("input").setAttribute("type", "url");
    var email = document.createElement("input").setAttribute("type", "email");
    var date = document.createElement("input").setAttribute("type", "date");
    var month = document.createElement("input").setAttribute("type", "month");
    var week = document.createElement("input").setAttribute("type", "week");
    var time = document.createElement("input").setAttribute("type", "time");
    var datetime = document.createElement("input").setAttribute("type", "datetime");
    var datetime_local = document.createElement("input").setAttribute("type", "datetime-local");

    if ( search.type !== "text" ) { html5checker.search == true; }
    if ( number.type !== "text" ) { html5checker.number == true; }
    if ( range.type !== "text" ) { html5checker.range == true; }
    if ( color.type !== "text" ) { html5checker.color == true; }
    if ( tel.type !== "text" ) { html5checker.tel == true; }
    if ( url.type !== "text" ) { html5checker.url == true; }
    if ( email.type !== "text" ) { html5checker.email == true; }
    if ( date.type !== "text" ) { html5checker.date == true; }
    if ( month.type !== "text" ) { html5checker.month == true; }
    if ( week.type !== "text" ) { html5checker.week == true; }
    if ( time.type !== "text" ) { html5checker.time == true; }
    if ( datetime.type !== "text" ) { html5checker.datetime == true; }
    if ( datetime_local.type !== "text" ) { html5checker.datetime_local == true; }

}

function support_inputPlaceholder() {
    var input = document.createElement("input");
    if ( "placeholder" in input) {
        html5checker.placeholder == true;
    }
}

function support_inputAutofocus() {
    var input = document.createElement("input");
    if ( "autofocus" in input) {
        html5checker.autofocus == true;
    }
}

function support_microdata() {
    if ( !!document.getItems ) {
        html5checker.microdata == true;
    }
}
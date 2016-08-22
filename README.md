# HTML5 detection library
Quick review of detecting HTML5 features from dive into html5 by [Mark Pilgrim](https://en.wikipedia.org/wiki/Mark_Pilgrim)

 HTML5 is **not one big thing**; it is a collection of individual features. 
 So you **can’t detect “HTML5 support,” because that doesn’t make any sense**. But you can detect support for individual features, like canvas, video, or geolocation.

There are four techniques that you can you use for detection of features:

1. If a certain property exists on a global object such as getItems in document, geolocation in navigator, localStorage, applicationCache and Worker in window pbjects.
2. Create an element, then check if a certain property exists on that element such as getContext in canvas, and fillText in canvasText API, placeholder and autofocus in input.
3. Create an element, check if a certain method exists on that element, then call the method and check the value it returns such as checking video format that the browser can suport.
4. Create an element, set a property to a certain value, then check if the property has retained its value, that can be user for new types of inputs in MTML5


I also tried the famous [video for eveybody codes](http://camendesign.com/code/video_for_everybody). You can find video for everybody generator [here](http://v4e.thewikies.com/)

More usefuil links:

* [Modernizer](https://modernizr.com/)
* [geo.js](https://code.google.com/archive/p/geo-location-javascript/)
* [ Dive Into HTML5 chapter 2](http://diveintohtml5.info/detect.html)

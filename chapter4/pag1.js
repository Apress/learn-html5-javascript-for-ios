var isiPhone = navigator.userAgent.match(/iPhone/i);
var isiPod = navigator.userAgent.match(/iPod/i);
var isiPad = navigator.userAgent.match(/iPad/i);

window.onhashchange = function() {}
window.onorientationchange = function() {}
function load_content() {
    var url = document.location.toString();
    if (url.match(/about/i)) {
        $("#content").load('/api/about.php');
    }
    if (url.match(/index/i)) {
        $("#content").load('/api/categories.php');
    }
    // .. do for remainder of pages
}

// will use this for all load events
$().ready(function(){
    load_content();
});

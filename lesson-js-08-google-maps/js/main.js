var map,
    infoWindowContent = document.getElementsByClassName('info-freeUA')[0].outerHTML;
function initMap() {
    var freeUa = {lat: 48.7345391, lng: 37.5795941},
        map = new google.maps.Map(document.getElementById('map'), {
            center: freeUa,
            zoom: 19
        }),
        marker = new google.maps.Marker({
            position: freeUa,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            title: 'Free UA'
        }),
        infowindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });
    marker.setMap(map);
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

// ;(function ($) {
//     $(function(){
//
//     })  ;
// })(jQuery);
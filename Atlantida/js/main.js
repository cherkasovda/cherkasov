;(function ($) {
    $(function () {
        $("#navToggle").click(function () {
            $(this).toggleClass("active");
            $(".overlay").toggleClass("open");
            $("body").toggleClass("locked");
        });
    });

    $('.overlay .nav-link').on('click', function () {
        $(".overlay").toggleClass("open");
        $("#navToggle").toggleClass("active");
        $("body").toggleClass("locked");

    });
    window.onload = function () {
        var $grid = $('.popup-gallery').isotope({
            itemSelector: '.element-item',
            percentPosition: true,
            masonry: {
                columnWidth: 1 / 4
            }
        });

        $('.button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });
// change is-checked class on buttons
        $('.button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    };


    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);


    var body = $("html, body");
    $(document).ready(function () {
        var header = $('#header').offset().top;
        $('.scrTop').on('click', function () {
            body.stop().animate(
                {scrollTop: header},
                1000,
                'swing')
        });
    });

    $('.nav-link[href^="#"]').click(function () {
        body.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });


})(jQuery);

var map,
    infoWindowContent = document.getElementsByClassName('atlanta')[0].outerHTML;
function initMap() {
    var atlanta = {lat: 48.620235, lng: 37.525296},
        map = new google.maps.Map(document.getElementById('map'), {
            center: atlanta,
            zoom: 15,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "weight": "2.00"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#9c9c9c"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#7b7b7b"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#46bcec"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c8d7d4"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#070707"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                }
            ]
        }),
        marker = new google.maps.Marker({
            position: atlanta,
            map: map,
            // icon: image,
            animation: google.maps.Animation.DROP,
            title: 'Atlantida',
            icon: {
                url: "img/location.png",
                scaledSize: new google.maps.Size(50, 50)
            }
        });
    infowindow = new google.maps.InfoWindow({
        content: infoWindowContent
    });
    marker.setMap(map);
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    marker.setMap(map);
}


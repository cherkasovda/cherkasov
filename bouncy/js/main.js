
;(function($) {
    $(function () {

        /*     var $grid = $('.grid').isotope({
                 itemSelector: '.element-item',
                 layoutMode: 'fitColumns'
             });
     */

// init Isotope
        var $grid = $('.popup-gallery').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitColumns'
        });
// filter functions

// bind filter button click
        $('.button-group').on('click', '.button', function () {
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

    });

    $(function () {
        $('.slick-slider').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            prevArrow: null,
            nextArrow: null

        })
    });
    $(function () {
    $(document).ready(function () {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'

            }
        });
    });
});
})(jQuery);

/*
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
        })

}
*/


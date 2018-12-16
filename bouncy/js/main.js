
// ;(function($){
 /*   $(function(){
    var $grid = $('.gallery').isotope({
        itemSelector: '.works'
    });

// store filter for each group
    var filters = {};

    $('.section-inner').on( 'click', '.button', function( event ) {
        var $button = $( event.currentTarget );
        // get group key
        var $buttonGroup = $button.parents('.button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        filters[ filterGroup ] = $button.attr('data-filter');
        // combine filters
        var filterValue = concatValues( filters );
        // set filter for Isotope
        $grid.isotope({ filter: filterValue });
    });

// change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function( event ) {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            var $button = $( event.currentTarget );
            $button.addClass('is-checked');
        });
    });

// flatten object by concatting values
    function concatValues( obj ) {
        var value = '';
        for ( var prop in obj ) {
            value += obj[ prop ];
        }
        return value;
    }
    });*/
    // slider
        $(function () {
            $('.slick-slider').slick({
                autoplay: true,
                autoplaySpeed: 4000,
                dots: true,
                prevArrow: null,
                nextArrow: null

            })
        });

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

// })(jQuery);
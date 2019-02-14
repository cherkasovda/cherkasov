;(function($){
    popup = {
        init: function(){
            $('figure').click(function(){
                popup.open($(this));
            });

            $(document).on('click', '.popup img', function(){
                return false;
            }).on('click', '.popup', function(){
                popup.close();
            })
        },
        open: function($figure) {
            $('.gallery').addClass('pop');
            $popup = $('<div class="popup" />').appendTo($('body'));
            $fig = $figure.clone().appendTo($('.popup'));
            $bg = $('<div class="bg" />').appendTo($('.popup'));
            $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
            $shadow = $('<div class="shadow" />').appendTo($fig);
            src = $('img', $fig).attr('src');
            $shadow.css({backgroundImage: 'url(' + src + ')'});
            $bg.css({backgroundImage: 'url(' + src + ')'});
            setTimeout(function(){
                $('.popup').addClass('pop');
            }, 10);
        },
        close: function(){
            $('.gallery, .popup').removeClass('pop');
            setTimeout(function(){
                $('.popup').remove()
            }, 100);
        }
    }

    popup.init()
/*$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
    $('img').click(function(event){ // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form')
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    /!*.find('img').remove()
                    .end()
                    .append($(this))*!/
                    .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
            });
    });
    /!* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке *!/
    $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
});*/
/*$(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        prevArrow: null,
        nextArrow: null
           })
});*/
})(jQuery);
;(function ($) {
    $(function () {
      $('a:first-of-type').on('click',function () {
          $(this).next().hide(500);
      });
        $('a:nth-of-type(2)').on('click',function () {
          $(this).next().show(500);
      });
        $('a:nth-of-type(3)').on('click',function () {
          $(this).next().toggle(500);
      });
        $('a:nth-of-type(4)').on('click',function () {
          $(this).next().slideUp(2000);
      });
        $('a:nth-of-type(5)').on('click',function () {
          $(this).next().slideDown(2000);
      });
        $('a:nth-of-type(6)').on('click',function () {
          $(this).next().slideToggle(2000);
      });
        $('a:nth-of-type(7)').on('click',function () {
          $(this).next().fadeOut(2000);
      });
        $('a:nth-of-type(8)').on('click',function () {
          $(this).next().fadeIn(2000);
      });
        $('a:nth-of-type(9)').on('click',function () {
          $(this).next().fadeTo(2000, 0.5);
      });
        $('a:nth-of-type(10)').on('click',function () {
          $(this).next().fadeToggle(2000, function () {
              console.log(123)
          });
      });
        $('a:nth-of-type(11)').on('click',function () {
            $(this).next()./*addClass('animated').*/animate({
            width:'300px',
            height: '300px',
            margin: '50px 200px'
            }, 2000,
                function () {
                    $(this).addClass('animated')
                });
        });

        var anc = $('#anc').offset().top;
        $('a:nth-of-type(12)').on('click',function () {
        var body = $("html, body");
        body.stop().animate(
            {scrollTop: anc},
            1000,
            'swing' )
        });
    })

})(jQuery);
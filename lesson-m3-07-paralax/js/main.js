;(function ($) {
    $(function () {
        var w = $(window),
            b1 = $('.child:nth-child(1)'),
            b2 = $('.child:nth-child(2)'),
            b3 = $('.child:nth-child(3)'),
            b1t = b1.position().top,
            b2t = b2.position().top,
            b3b = b3.position().top;
            b1l = b1.position().top,
            b2l = b2.position().top,
            b3b = b3.position().top;
        console.log(b1t, b2t, b3b);
w.on('scroll', function () {
    console.log(w.scrollTop());
    var scrollTop = w.scrollTop();
    b1.css('top', b1t + scrollTop/20 + 'px');
    b2.css('top', b2t - scrollTop/10 + 'px');
    b3.css({'top': b3b + scrollTop/30 + 'px', bottom: 'initial'});
});

w.on('mousemove', function (e) {
    b1.css({top: b1t + scrollTop/20 + 'px', left: b1l +});
    b2.css({top: b2t - scrollTop/10 + 'px', left: b1l +});
    b3.css({'top': b3b + scrollTop/30 + 'px', bottom: 'initial'});
});
    });
})(jQuery);

(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.nav')
                .toggleClass('menu_state_open');
        });

        $('.nav-item').on('click', function() {
            // do something

            $(this).closest('.nav')
                .removeClass('menu_state_open');
        });
    });
})(jQuery);
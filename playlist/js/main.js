;(function ($) {
    $(function () {

        var playList = [{
            author: "led zeppelin",
            song: "stairway to heaven",
            duration: "2:03"
        },
            {
                author: "queen",
                song: "bohemian rhapsody",
                duration: "2:30"
            },
            {
                author: "lynyrd skynyrd",
                song: "free bird",
                duration: "1:56"
            },
            {
                author: "deep purple",
                song: "smoke on the water",
                duration: "3:03"
            },
            {
                author: "jimi hendrix",
                song: "all along the watchtower",
                duration: "2:53"
            },
            {
                author: "AC/DC",
                song: "back in black",
                duration: "2:43"
            },
            {
                author: "queen",
                song: "we will rock you",
                duration: "2:13"
            },
            {
                author: "metallica",
                song: "enter sandman",
                duration: "3:03"
            }
        ];
        var $playList = $('<div />', {id: 'playlist'}).prepend('<h2>' + 'PlayList').appendTo('body');
        for (var k = 0; k < playList.length; k++) {
            $('<div class="section-inner"/>')
                .append('<div><span class="duration">' + playList[k].duration + '</span>' + '<span class="author">' + playList[k].author)
                .append('<div class="favorite">' +
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">' + '<use xlink:href="#heart" class="heart" />' + '</svg>')
                .append('<div><h3 class="song">' + playList[k].song)
                .appendTo($playList)
        }

        /*  $('.favorite')
              .click(
                  function () {
                      $(this).find('.heart').css('fill', 'red');
                  }
              )*/

       /* var click_check = true;
        $('.favorite').click(function () {
            if (click_check) {
                $(this).find('.heart').css('fill', 'red');
            }
            else {
                $(this).find('.heart').css('fill', 'none');
            }
            click_check = !click_check;
        });*/
        $('body').on('click', '.favorite', function () {
            $(this).toggleClass('selected')
        })
    })

})(jQuery);
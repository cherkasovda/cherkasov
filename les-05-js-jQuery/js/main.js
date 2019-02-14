;(function ($) {
    $(function () {
    var $h1 = $('h1');
    console.log($h1.html());
    $h1.html('new Title');
    /* console.log($h1.html());
     $h1
         .text('new Title from .text()')
         .css('color', '#777' )
         .css({
                 color: 'red',
                 fontStyle: 'italic',
                 fontWeight: 'normal'
             })
         .addClass('green')
         .next() //следующий элемент
         .addClass('green')
         .nextAll('p') //все последующие элементы
         .addClass('brown')
         .prev()
     .addClass('blue')
         .removeClass('blue')
         .nextAll('ul')
         .css('text-align', 'center')
         .find('.active')
         .addClass('red')
         .find('a')
         .addClass('green')
         .end()
         .end()
         .hide()
     ;
     console.log($h1.text());*/

    $h1.closest('main').toggleClass('main-content');
    var span = $('<span />').text('span text');
    $('main').append(span);
    // span.appendTo('main');
    $('main, ul').addClass('new-class'); //создание класса для выборки
    $('main').prepend('<span>text from prepend</span>')
        .append('<div>text from div</div>')
        .after('after main')
        .before('before main');
    $('<div>text from div insert()</div>').insertBefore('ul');
    $('ul li').css('color', '#ccc')
    // .eq(0)
        .filter(':lt(2)')
        .css('color', 'black')
        .find('a')
        .attr('href', 'http://google.com')
    console.log($('main').attr('href'));
    console.log($('main').attr('class'));
    console.log($('main')[0].hasAttribute('href'));
    /*$('[data-asdf]').data('asdf', '11111');
    console.log($('[data-asdf]').data('asdf'));*/
    $('li:nth-child(3)').data('asdf', '11111');
    console.log($('li:nth-child(3)').data('asdf'));

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
    var $playList = $('<div />', {id: 'playlist'}).prepend('<hr>').appendTo('body');
    for (var k = 0; k < playList.length; k++) {
        $('<div />')
            .append('<span class="duration">' + playList[k].duration + '</span>')
            .append('<span class="author">' + playList[k].author + '</span>')
            .append('<h3 class="song">' + playList[k].song + '</h3>' + '<span class="favorite"></span>')
            .appendTo($playList)
    }
    })
})(jQuery);
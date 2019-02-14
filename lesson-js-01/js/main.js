;(function () {
    var int = 1,
        string = 'Hello, Beetroot',
        bool = false,
        obj = {
            name: 'Ivan',
            age: 20,
            isDriver: false,
            family: {
                wife: 'Susanna'
            }
        },
        nullVar = null,
        undef = undefined;
    // console.log(int, bool, obj);
    // console.log(string);
    // var name = prompt('Как Вас зовут?', 'Гость'),
    //     age = confirm('Есть ли вам 18 лет?');
    // if (name && age) {
    //     console.log('Привет, ' + name + '! Добро пожаловать на наш сайт!');
    // } else if (name && !age) {
    //     console.log(name + ', извини, тебе должно быть 18 лет!');
    // } else if (!name && age) {
    //     console.log('Нам нужно знать как к тебе обращаться!');
    // } else {
    //     console.log('Уходи!');
    // }


    var int1 = 123,
        int2 = -222,
        int3 = 12.33,
        int4 = 3,
        int5 = 3;
    console.log(int1, int2, int3);
    console.log(int1 + int2);
    console.log(int1 - int2);
    console.log(-int2);
    console.log(int3 - 1);
    // nt2 = int2 + 10;
    int2 += 10;
    console.log(int2);
    // int2++;
    // ++int2;
    console.log(int2);

    console.log(++int4);
    console.log(int5++);

    console.log(int4);
    console.log(int5);

    console.log(9 % 4); // получение остатка от деления
    console.log(12 / "2ываыва");
    console.log(1 + NaN); // Not a Number (не число)

    var str,
        str1 = '',
        str2 = 'Hello',
        str3 = 'Beetroot';
    console.log(str2 + ', ' + str3 + '!'); // конкатенация
    console.log(str2 + int1);
    console.log(int2 + str2 + int1);

    console.log(typeof str1);
    console.log(typeof int1);
    console.log(str, typeof str);
    console.log(nullVar, typeof nullVar);

    console.log(1 >= 2);
    console.log(1 <= 2);
    console.log(2 <= 2);
    console.log(1 >= 1);
    console.log(1 == 1);
    console.log('1 != 2', 1 != 2);
    console.log('\'1\' == 1\\' ,'1' == 1);
    console.log('1' === 1);
    console.log(str2 < str3);
    console.log('aab' > 'aac');

    console.log('true && true', true && true);
    console.log('true && false', true && false);
    console.log('true || true', true || true);
    console.log('true || false', true || false);
    console.log(1 > 2 || 4 > 3);
    console.log(true && (true || 1 == 2));

    console.log('\'\'', !'');
    if (1 >= 2 && 'строка') {
        // false
        console.log('Да');
    } else if (1 > 1) {
        // false
        console.log('Да');
    } else {
        console.log('Нет');
    }

    for(var asd = 0; asd <= 10; asd++){
        console.log('for', asd);
    }
    var aaa = 10;
    while (aaa < 10) {
        console.log(aaa++);
    }

    do {
        console.log('do while', aaa++);
    } while (aaa < 10);

    console.log('длина строки', str3.length);
    console.log('первый символ', str3[0]); //певый символ строки
    console.log(str3.substr(0, 3)); //подстрока
    console.log(int3.toFixed(3));

    var Masha = '12 яблок',
        Vasya = 'один арбуз и 2 дыни',
        Ivan = '3 банана'
    console.log(parseFloat('1.5 арбуз и 2 дыни'));
    console.log(parseInt(Masha) + parseInt(Vasya) + parseInt(Ivan));
    console.log(Math.floor(1.9)); // до ближайшего целого менньшего
    console.log(Math.ceil(1.2)); // до ближайшего целого большего
    console.log(Math.round(5.4)); // округление до ближайшего целого
    var coin = Math.round(Math.random());
    // console.log(Math.round(Math.random()));
    if (coin) {
        console.log('Орёл');
    } else {
        console.log('Решка');
    }
    console.log(coin ? 'Орёл' : 'Решка');
})();

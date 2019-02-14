;(function () {
    'use strict';
    var int = 1;
    var string = 'Hello, beetroot';
    var bool = true;
    var obj = {
        name: 'ivan',
        age: 30,
        isDriver: false,
        family: {
            wife: 'aaaaa'
        }
    };
    var nullVar = null;
    var undef = undefined;
  /*  console.log(bool, obj.age);
    console.log(string);
    var name = prompt('как вас зовут', 'Гость'),
        age = confirm('есть ли вам 18лет?');
    console.log('Имя: ' + name, age);
    if (name && age) {
        console.log('Привет, ' + name + 'Добро пожаловать');
    } else if (name && !age){
        console.log(name + 'извини, нам не по пути');
    } else if (!name && age) {
        console.log('нам нужно твое имя');
    } else {
console.log('уходи');    }
*/

var int1 = 123,
    int2 = -123,
    int3 = 12.33;
    console.log(int1, int2, int3);
    console.log(int1 + int2);
    console.log(-int2);
    console.log(int3 - 1);
    // var int2 = int2 + 20;
    int2 += 10;
    console.log(int2);
    int2++;
    console.log(int2);
    console.log(10 % 2);

    var str,
        str1 = '',
        str2 = 'hello',
        str3 = 'beetroot';
    console.log(str2 + ', ' + str3 + '!'); //конкатенация
    console.log(str2 + int1);

    console.log(typeof str1);
    console.log(str, typeof str);
    console.log(nullVar, typeof nullVar);

    console.log(1 >= 2);
    console.log(1 <= 2);
    console.log(1 > (2 || 4) > 3);
    console.log(str3.length);
})();


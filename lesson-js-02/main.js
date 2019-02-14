;(function(){
    // console.log('Hello');
    var name = 'Иван';
    // var name = prompt('Ваше имя');

    function sayHello() {
        var name = 'Гость';
        console.log('Hello, ' + name);
    }
    console.log();
    sayHello();
    console.log(name);

    if (1==1) {
        var variable1 = 1;
    }
    variable1 = 2;
    console.log(variable1);

    const c1 = 'constant'

    console.log(c1);
    
    
    function calcSum(a, b, c) {
        // c = c ? c : 0;
        c = c || 0;
        console.log(c);
        console.log(a + b + c);
    }
    calcSum(1, 3, 1);

    var calcArea = function (a, b) {
        console.log('Area of room ' + a + ' x ' + b + ':', a * b);
    };

    calcArea(2, 3);

    var calcPerim = function (a, b) {
        // if (b > 10) {
        //     console.log('b > 10');
        //     return;
        // }
        return 2 * (a + b);
        console.log('После return'); //не выведется
    };
    console.log('Периметр:', calcPerim(2, 3));
    console.log('Половина периметра:', calcPerim(2, 3) / 2);
    console.log(calcPerim(2, 11));

    function calcPrice() {
        var pricePerOne = 10,
            l = +prompt('Введите длину комнаты'),
            w = +prompt('Введите ширину комнаты'),
            perim = calcPerim(l, w);
        // if (perim > 20) return perim * 0.95 * pricePerOne;
        // else return perim * pricePerOne;
        return (perim > 20) ?
            perim * 0.95 * pricePerOne :
            perim * pricePerOne;

    }
    // console.log(calcPrice());

    function calcDegree(num, degree) {
        console.log('degree', degree);
        if (degree > 1) {
            var result = num * calcDegree(num, degree - 1);
            console.log('result', result);
            return result;
        } else {
            console.log('result', num);
            return num;
        }
    }
    // var i = 1;
    // function calcDegree(num, degree) {
    //    if (degree > 1) {
    //        console.log('Шаг ' + i++ + ' в памяти (результата не получили)');
    //         var result = num * calcDegree(num, degree - 1);
    //         console.log('Шаг ' + degree + ' выполнение запомненной функции', result);
    //         return result;
    //     } else {
    //        console.log('Шаг ' + i++ + ' в памяти (получили первый результат) ' + num);
    //         return num;
    //     }
    // }
    console.log(calcDegree(2, 3));

    function ucFirst(str) {
        var firstChar = str[0].toUpperCase(),
            substr = str.substr(1, str.length - 1);
        return firstChar + substr;
    }
    console.log(ucFirst('вася'));
    function min(a, b) {
        console.log(a > b ? b : a);
    }
    min(2, 5);
    min(3, -1);

    function prompt100() {
        var num = parseInt(prompt('Введите число'));
        if (num > 100) {
            console.log('Поздравляем!');
        } else {
            prompt100();
        }
    }
    prompt100();
})();
;(function () {
    var car = {
        params: {
            speed: 300,
            color: 'red',
            weight: 1000
        },
        details: ['door', 'wheel', 'engine', 'gearbox'],
        new: true
    };
    console.log(car.details);
    if (car.new) {
        console.log('машина новая');
    }
    car.inUk = false;
    console.log(car);
    car.params.power = 300;
    car.params.speed = 200;
    var car2 = car;
    car2.params.color = 'green';
    console.log(car.details[1]);
    car.details[2] = 'bumper';
    car.details[10] = 'mirror';
    console.log(car.details.length);
    car.details.push('fhqff'); //доваить в конец
    car.details.unshift('bumper');//добавить вперед
    car.details.shift();//удалить первый
    car.details.pop();//удалить последний
    console.log('есть детали: ' + car.details
        .filter(
            function (item) {
        return item != undefined
    })
        .join(', '));
    var fruit = 'apple, orange, banana, kiwi, fuk fuck, banana, kiwi, fuk fuck';
    var fruitArray = fruit.split(', ');

    delete fruitArray[2];
    console.log(fruitArray);
    fruitArray.splice(4, 3, 'ananas', 'limon');
    console.log(fruitArray);

    var student = {
        firstName: 'Ivan',
        secondName: 'Ivanov',
        age: 20,
        rating: 60
    }
    function checkRating(rating) {

            if (student[key] >= 90) {
                console.log(key + ': отличник');
            } else if (student[key] >=70) {
                console.log(key + ': хорошист');
            } else if (student[key] >=55) {
                console.log(key + ': база');
            } else {
                console.log(key + ': ' + student[key]);
            }

    }
    for(var key in student) {
        // console.log(key);
        // console.log(student[key]);
        if (key === 'rating') {
            checkRating(student[key])
        }
            }


})();
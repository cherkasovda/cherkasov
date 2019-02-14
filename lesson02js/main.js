/*
;(function(){
    var name = prompt('Ваше имя');

    function sayHello() {
        var name = 'гость'
        console.log('hello, ' + name);
    }
    sayHello();
    console.log(name);
})();
*/


function getPrimeNumbers(from, to) {
  nextPrime:
    for (from; from <= to; from++) {
        for (var i = 2; i < from; i++) {
            if (!(from % i)) {
                continue nextPrime;
            }
        }
     console.log(from);
    }
}
getPrimeNumbers(1, 10);
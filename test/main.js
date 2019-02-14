;(function () {
    var name = prompt('Введите логин');
    if (name === 'Админ') {
        var pasw = prompt('Введите пароль');
        if (pasw === 'Admin') {
            document.write('Добро пожаловать!');
        } else if (pasw) {
            document.write('пароль не верен');
        } else {
            document.write('Вход отменен');
        }
    }
    else if (name) {
        document.write('Я вас не знаю');
    } else {
        document.write('Вход отменен');
    }
})();
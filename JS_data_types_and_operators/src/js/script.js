;(function(){
	"use strict";

	var login = prompt('Введите ваш логин:', '');
	if (login == 'Админ'){
		var password = prompt('Введите ваш пароль:', '');
		if (password == 'Чёрный Властелин'){
			alert ('Добро пожаловать!');
		}else if (password == null){
		alert ('Вход отменён');
		}else{
		alert ('Пароль неверен');
		}
	}else if (login == null){
		alert ('Вход отменён');
	}else{
		alert ('Я вас не знаю');
	}

})();
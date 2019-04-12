;(function(){
	"use strict";

	let numberOne = prompt('Введите первое число', '');
	let numberTwo = prompt('Введите последнее число', '');		
	primeNumber();
	
	function primeNumber(){
		let primeArray = [];
		nextNumber:
		for (let i = numberOne; i <= numberTwo; i++){
			if(i < 2) continue;
			for (let j = 2; j < i; j++){
				if(i % j == 0) continue nextNumber;
			}
			primeArray.push(i);
		}
		alert('Простые числа:\n' + primeArray);
	}
	

})();
;(function(){
	"use strict";

	function array(){
		var arr = [];
	for(var i=0; i<15; i++){
		arr.push(Math.round(Math.random() * 100));
	}
	return arr
	}
	

	function square(x) { 
		return x*x;
	} 

	function sum(x) { 
		return x+x;
	} 

	var map = function(fn, arr) {
		var res = [ ]
		for(var i=0; i<arr.length; i++) {
			res[i] = fn(arr[i])
		}
		return res
	}

	alert('Массив случайных чисел:\n ' + array() +
	 '\nКвадрат чисел:\n ' + map(square, array()) +
	  '\nСумма чисел:\n ' + map(sum, array()));


	

})();
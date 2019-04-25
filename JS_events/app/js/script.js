;(function(){
	"use strict";

	document.onkeydown = function(event) {

		let el = document.querySelector("p").nextElementSibling;
		event = event || window.event;

		if ((event.keyCode == 83 || event.keyCode == 69) && event.ctrlKey) {
			event.preventDefault();

			if (event.keyCode === 83 && el.nodeName === "TEXTAREA") {
				let newEl = document.createElement("div");
				newEl.textContent = el.value;
				el.replaceWith(newEl);

			}else if (event.keyCode === 69 && el.nodeName === "DIV") {
				let newEl = document.createElement("textarea");
				newEl.textContent = el.textContent;
				el.replaceWith(newEl);
				
			}
		}
		
		if (event.keyCode === 27) {
			let newEl = document.createElement("div");
			el.replaceWith(newEl);
					
				}
			}

		})();
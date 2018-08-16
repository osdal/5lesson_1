let menuItems = document.querySelectorAll('.menu-item');
	menu = document.querySelector('.menu');

let a = menu.removeChild(menuItems[1]);// Удвляем пункт, который находится в не правильном месте
menu.insertBefore(a, menuItems[3]); // Вставляем удаленный пункт в правильное место
let b = a.cloneNode(true); //Копия пункта меню для добавления пятого пункта
b.textContent = 'Пятый пункт';
menu.appendChild(b);

// Получаем body для дальнейшей модификации
let body = document.getElementsByTagName('body');
// Изменяем background body
	document.body.style.background = 'url(img/apple_true.jpg)  center no-repeat';

let title = document.getElementById('title');
	title.textContent ='Мы продаем только подлинную технику Apple';

let column = document.getElementsByClassName('column'),
	adv = document.getElementsByClassName('adv'),
	col2 = column[1];

col2.removeChild(adv[0]);	


let answer = prompt('Как вы относитесь к Apple?'),
	promptAnswer = document.getElementById('prompt');
promptAnswer.textContent = answer;
console.log(promptAnswer);


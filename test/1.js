var p = document.createElement('p');
// створ новий елемент p
p.innerHTML = 'Приклад елемента';
// Записуємо в p...
p.classList.add('main', 'green');
// додаємо в p два класи

document.body.insertBefore(p, document.querySelector('#out'));
// добавляємо в хтмл параграф, перед тегом з ід-шніком out

console.log(p);



// window.onload - аналог defer, код виповняється після
					// загрузки сторінки

// var left = 290;
// document.getElementById('test').onwheel = function(event) {
// 	var line = event.deltaY;
// 	left = left + line*0.2;
// 	document.getElementById('test2').style.left = left + 'px';
// 	return false;
// }


// var obj = {
// 	a: 'in obj',
// 	fn: function() {
// 		console.log(this.a);
// 	}
// }
// obj.fn.call(null);
// var obj2 = {
// 	a: 2,
// 	obj: obj1
// }

// var obj3 = {
// 	a: 3,
// 	obj: obj2
// }

// obj3.obj.obj.logA.call(obj3);

// console.log( 0 || 1 && 2 || 3);

// var arr = [1, 2, 3,4,5,6,7];
// arr.push(9);
// arr.splice(2,1)
// arr.unshift(-2, -1)
// console.log(arr);




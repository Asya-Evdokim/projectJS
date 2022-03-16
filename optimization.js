//Оптимизация цикличных операций в JavaScript
// задача 1

for (let i = 1900; i <= 2100; i++) {
	let curr = new Date;
	let date = new Date(i, curr.getMonth(), curr.getDate());
	
	if (curr.getDay() === date.getDay()) {
		console.log(date);
	}
}
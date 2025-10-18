//! ## 🧩 *Задание 14: "Зоопарк"*

// javascript
const animals = ['тигр', 'пингвин', 'слон', 'коала', 'жираф'];

// *1.* Если есть 'тигр' И 'слон' — выведи "Сафари готово!"  
//* ---


// if (animals.includes('тигр') && animals.includes('слон')) {
// 	console.log('Сафари готово!');
// }



//* ---


// *2.* Иначе добавь 'льва' и выведи "Сафари дополнено!"  
//* ---


if (animals.includes('тигр') && animals.includes('слон')) {
	console.log('Сафари готово!');
} else {
	animals.push('льва')
	console.log('Сафари дополнено!');
}


//* ---


// *3.* Проверь, что теперь животных >= 6
//* ---


console.log(animals.length > 6);


//* ---




//! ## 🧩 *Задание 15: "Школьный конкурс"*

// javascript
const teams = [
  { name: 'Альфа', score: 85, time: 120 },
  { name: 'Бета', score: 92, time: 95 },
  { name: 'Гамма', score: 78, time: 150 }
];

// *1.* Найди команду-победителя (больше score И меньше time)  
//* ---


const sortedTeams = teams.sort((a, b) => {
	return a.score - b.score
})

console.log(sortedTeams[2].name);


//* ---


// *2.* Посчитай среднее время всех команд  
//* ---

let summaTime = 0;

for (let team of teams) {
	summaTime += team.time
}

console.log(summaTime / teams.length);

if ((summaTime / teams.length) < 140) {
	console.log('Быстрые команды!');
}


//* ---


// *3.* Если среднее время < 120 — выведи "Быстрые команды!"
//* ---





//* ---


// ## 🧠 10 логических заданий по объектам и массивам

// ---

//! ### 🧩 Задание 1: "Секретное агентство"

// ```javascript
// const agents = [
//   { name: "Shadow", active: true },
//   { name: "Fox", active: false },
//   { name: "Eagle", active: true },
//   { name: "Wolf", active: false }
// ];
//? 1. Найди, сколько агентов сейчас активны
//? 2. Верни массив только имён активных агентов
//? 3. Если нет активных — выведи "Все на миссии!"
// ```

//* ---

const agents = [
	{ name: 'Shadow', active: true },
	{ name: 'Fox', active: false },
	{ name: 'Eagle', active: true },
	{ name: 'Wolf', active: false },
]

let activeCount = 0
let activeAgents = []

for (const agent of agents) {
	if (agent.active == true) {
		activeCount++
		activeAgents.push(agent.name)
	}
}

if (activeCount == 0) {
	console.log('Все на миссии!')
}

console.log(activeCount)
console.log(activeAgents)

//* ---

//! ### 🧩 Задание 2: "Магазин скидок"

// ```javascript
// const products = [
//   { name: "ноутбук", price: 1000 },
//   { name: "мышь", price: 50 },
//   { name: "клавиатура", price: 150 }
// ];
//? 1. Считай общую сумму всех товаров

//* ---

const products = [
	{ name: 'ноутбук', price: 1000 },
	{ name: 'мышь', price: 50 },
	{ name: 'клавиатура', price: 150 },
]

let summa = 0

for (const product of products) {
	summa += product.price
}

console.log(summa)

//* ---

//? 2. Если сумма больше 1000 — выведи "Скидка 10%"

//* ---

if (summa > 1000) {
	console.log('Скидка 10%')
}

//* ---

//? 3. Примените скидку к каждому товару и покажите новую цену

//* ---

for (const product of products) {
	console.log(product.price * 0.9)
}

//* ---
// ```

//! ### 🧩 Задание 3: "Проверка пароля"

// ```javascript
// let password = "CodeMaster123";
//? 1. Проверь, содержит ли пароль хотя бы одну цифру

//* ---

let password = 'codemaster123'
let numbers = '0123456789'

// for (const letter of password) {
// 	if (numbers.includes(letter)) {
// 		console.log(true);
// 	}
// }

//* ---

//? 2. Проверь, начинается ли с большой буквы

console.log(password[0].toUpperCase() == password[0])

//? 3. Если оба условия соблюдены — выведи "Надёжный пароль"

//* ---

if (password.includes('/d/i') && password[0].toUpperCase() == password[0]) {
	console.log('Надёжный пароль')
}

//* ---

// ```

// ---

//! ### 🧩 Задание 4: "Детективное расследование"

// ```javascript
// const clues = ['кровь', 'отпечатки', 'письмо', 'нож'];
//? 1. Если в уликах есть 'нож' и 'отпечатки' — выведи "Дело раскрыто!"
//? 2. Иначе выведи "Расследование продолжается"
//? Подумай, как сделать проверку сразу двух условий
// ```

//* ---

const clues = ['кровь', 'отпечатки', 'письмо', 'нож']

if (clues.includes('нож') && clues.includes('отпечатки')) {
	console.log('Дело раскрыто!')
} else {
	console.log('Дело продолжается!')
}

//* ---

//! ### 🧩 Задание 5: "Управление классом"

// ```javascript
// const students = [
//   { name: 'Маша', score: 90 },
//   { name: 'Петя', score: 70 },
//   { name: 'Саша', score: 85 }
// ];
//? 1. Найди ученика с наивысшим баллом

//* ---

const students = [
  { name: 'Маша', score: 90 },
  { name: 'Петя', score: 70 },
  { name: 'Саша', score: 85 }
];

// 70, 85, 90

// console.log(students.sort((a, b) => a.score - b.score)[2].score);

//* ---

//? 2. Найди средний балл по классу

let summa = 0;

for (const student of students) {
	summa += student.score;
}

console.log(summa / students.length);

//? 3. Если средний балл > 80 — выведи "Класс отличников"

if (summa / students.length > 80) {
	console.log("Класс отличников");
}

// ```

// ---

//! ### 🧩 Задание 6: "Турнир по играм"

// ```javascript
// const players = [
//   { name: "Alex", points: 120 },
//   { name: "Mira", points: 300 },
//   { name: "Leo", points: 180 }
// ];
//? 1. Кто победитель (у кого больше всех очков)?

//* ---
const players = [
  { name: "Alex", points: 120 },
  { name: "Mira", points: 300 },
  { name: "Leo", points: 180 }
];


// console.log(players.sort((a, b) => a.points - b.points)[2].points);


//* ---

//? 2. Отсортируй игроков по убыванию очков

//* ---

// console.log(players.sort((a, b) =>  b.points - a.points));

//* ---

//? 3. Если есть игрок с очками > 250 — выведи "Чемпион найден!"

for (const player of players) {
	if (player.points > 250) {
		console.log("Чемпион найден!");
	}
}
// ```

// ---

//! ### 🧩 Задание 7: "Инвентарь путешественника"

// ```javascript
// const inventory = ['компас', 'вода', 'еда', 'карта', 'фонарик'];
//? 1. У тебя пропал 'фонарик' — удали его, если он есть

//* ---
let inventory = ['компас', 'вода', 'еда', 'карта', 'фонарик'];

// if (inventory.includes("фонарик")) {
// 	inventory = inventory.slice(0, 4)
// }

// console.log(inventory);


//* ---

//? 2. Если нет 'ножа' — добавь его

//* ---
if (!inventory.includes("ножа")) {
	inventory.push("ножа")
}

//* ---
//? 3. Проверь, что теперь в рюкзаке не меньше 5 предметов

//* ---
if (inventory.length > 5) {
	console.log(true);
}
//* ---
// ```

// ---

//! ### 🧩 Задание 8: "Календарь задач"

// ```javascript
// const tasks = [
//   { title: "Учить JS", done: true },
//   { title: "Сделать проект", done: false },
//   { title: "Посмотреть лекцию", done: false }
// ];
//? 1. Сколько задач выполнено?
//* ---

const tasks = [
  { title: "Учить JS", done: true },
  { title: "Сделать проект", done: false },
  { title: "Посмотреть лекцию", done: false }
];



//* ---
//? 2. Добавь новую задачу "Повторить теорию" (не выполнена)

//* ---

tasks.push(
	{ title: "Повторить теорию", done: false }
)

console.log(tasks);

//* ---

//? 3. Если все задачи done === true, выведи "День продуктивный!"
// ```

// ---

//! ### 🧩 Задание 9: "Оценка отзывов"

// ```javascript
// const reviews = [5, 4, 5, 3, 4, 5];
//? 1. Найди среднюю оценку

//* ---

const reviews = [5, 4, 5, 3, 4, 5];

let avg = reviews.reduce((total, item) => {return total + item}) / reviews.length;

console.log(avg);

//* ---

//? 2. Если средняя >= 4.5 → "Отлично"
//?    если >= 3.5 → "Хорошо"
//?    иначе → "Плохо"
//? Подумай, как посчитать среднее значение в массиве
// ```

// ---

//! ### 🧩 Задание 10: "Система входа"

// ```javascript
// const users = [
//   { name: "admin", password: "1234" },
//   { name: "user", password: "abcd" },
//   { name: "guest", password: "1111" }
// ];
// const inputName = "user";
// const inputPass = "abcd";
//? Проверь, есть ли пользователь с таким логином и паролем

//* ---
const users = [
  { name: "admin", password: "1234" },
  { name: "user", password: "abcd" },
  { name: "guest", password: "1111" }
];
const inputName = "user";
const inputPass = "abcd";

let currentUser = users.find((item) => {return item.name == inputName && item.password == inputPass})

console.log(currentUser);

if (currentUser != null) {
	console.log("Доступ разрешён");
}


for (const user of users) {
	if (user.name == inputName) {
		if (user.password == inputPass) {
			console.log("Ok");
		} else {
			console.log("Ошибка пароля");
		}
	} else {
		console.log("Пользователь не найден");
	}
}

//* ---

//? Если найден — выведи "Доступ разрешён"
//? Если логин есть, но пароль неверный — "Ошибка пароля"
//? Если логина нет — "Пользователь не найден"
// ```

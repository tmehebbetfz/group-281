// ## 🎯 10 заданий по объектам и массивам

//! ### 📝 Задание 1: "Профиль супергероя"
// ```javascript
// Создай объект супергероя со свойствами:
// - имя (name)
// - суперсила (power) 
// - уровень силы (level) от 1 до 10
// - город (city)
// Покажи весь профиль в консоли

//* ---

const hero = {
	name: "Max",
	power: "Strength",
	level: 9,
	city: "Sumqait"
}

console.log("Name: " + hero.name + '\n' + "Power: " + hero.power);

//* ---


//! ### 📝 Задание 2: "Магазин игрушек"
// ```javascript
// const toys = ['машинка', 'конструктор', 'кукла', 'мяч', 'пазл'];
// Добавь 2 новые игрушки в конец массива
// Удали последнюю игрушку
// Сделай так, чтобы все игрушки отображались через запятую
// ```

//* ---
const toys = ['машинка', 'конструктор', 'кукла', 'мяч', 'пазл'];

toys.push("quseyn", "murad");
toys.pop();
console.log(toys.join(","));

//* ---

//! ### 📝 Задание 3: "Исправь ошибки в тексте"
// ```javascript
// let message = "   сеГОДня хоРОшая погоДА   ";
// Исправь текст так чтобы:
// 1. Убрать лишние пробелы
// 2. Сделать первую букву заглавной
// 3. Остальные буквы маленькими

//* ---
let message = "   сеГОДня хоРОшая погоДА   ";

console.log(message.trim()[0].toUpperCase() + message.trim().slice(1));

//* ---


//! ### 📝 Задание 4: "Поиск сокровищ"
// ```javascript
// const treasureChest = ['золото', 'серебро', 'драгоценный камень', 'монеты', 'карта'];
// Найди индекс 'драгоценный камень'
// Проверь, есть ли в сундуке 'жемчуг'
// Вырежи сокровища с позиции 1 до 3

//* ---

const treasureChest = ['золото', 'серебро', 'драгоценный камень', 'монеты']

console.log(treasureChest.indexOf('драгоценный камень'))
console.log(treasureChest.includes('жемчуг'))
console.log(treasureChest.slice(1, 3));


//* ---

//! ### 📝 Задание 5: "Школьный дневник"
// ```javascript
// Создай объект ученика с оценками по предметам:
// const student = {
//     name: "Мария",
//     class: "5Б",
//     grades: {
//         math: [5, 4, 5],
//         literature: [4, 5, 4],
//         science: [5, 5, 4]
//     }
// };
// Добавь новую оценку по математике
// Покажи все оценки по литературе


//* ---
const student = {
    name: "Мария",
    class: "5Б",
    grades: {
        math: [5, 4, 5],
        literature: [4, 5, 4],
        science: [5, 5, 4]
    }
};

student.grades.math.push(10);
console.log(student.grades);


//* ---

//! ### 📝 Заdition 6: "Шифровальщик"
// ```javascript
// let secretMessage = "Привет, друг!";
// Зашифруй сообщение:
// 1. Переведи в верхний регистр
// 2. Замени все буквы 'Р' на 'П'
// 3. Повтори сообщение 3 раза

//* ---
let secretMessage = "Привет, друг!";

const result = secretMessage.toUpperCase().replace('Р', 'П').repeat(3);

console.log(result);

//* ---

//! ### 📝 Задание 7: "Список друзей"
// ```javascript
// const friends = ['Саша', 'Маша', 'Паша', 'Даша'];
// Добавь нового друга в начало списка
// Удали первого друга из списка  
// Объедини имена через " и "
// Найди, на какой позиции стоит 'Паша'


//* ---

const friends = ['Саша', 'Маша', 'Паша', 'Даша'];
friends.unshift("Max")
friends.shift()

console.log(friends.join(' и '));
console.log(friends.indexOf('Паша'));


//* ---

//! ### 📝 Задание 8: "Погодная станция"
// ```javascript
// Создай объект погоды с:
// - температурой (temperature)
// - описанием (description)
// - влажностью (humidity)
// - есть ли осадки (isRaining)
// Затем измени температуру и удали свойство влажности
// ```

//! ### 📝 Задание 9: "Раздели слова"
// ```javascript
// let sentence = "JavaScript-это-интересно-и-весело";
// Раздели строку по дефисам
// Сделай так, чтобы слова начинались с заглавных букв
// Собери обратно в строку через пробелы

//* ---


let sentence = "JavaScript-это-интересно-и-весело";

console.log(sentence.split("-"));

for (let w of sentence.split("-")) {
	console.log(w.toUpperCase());
}

console.log(sentence.split("-").join(" "));

//* ---

//! ### 📝 Задание 10: "Игровая коллекция"
// ```javascript
// const games = ['Minecraft', 'Roblox', 'Among Us'];
// Создай копию массива
// Добавь 2 новые игры в обе коллекции
// Сравни оригинал и копию - должны быть одинаковыми


//* ---

const games = ['Minecraft', 'Roblox', 'Among Us'];

const copyGames = games.slice();

games.push("Beast", "Mm");

//* ---


//! ## 🎁 Бонус - Пример решения для первого задания:
// ```javascript
// const superhero = {
//     name: "Человек-Паук",
//     power: "Паутина и лазание по стенам",
//     level: 8,
//     city: "Нью-Йорк"
// };

// console.log("Профиль супергероя:");
// console.log("Имя: " + superhero.name);
// console.log("Суперсила: " + superhero.power);
// console.log("Уровень: " + superhero.level);
// console.log("Город: " + superhero.city);
// ```
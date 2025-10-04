// # 🛑 Домашнее задание

//! ## 1. Работа с объектами

// ### Задание 1: Создание объекта
// Создайте объект `student` со следующими свойствами:
// - `name` (строка)
// - `age` (число)
// - `courses` (массив строк)
// - `isActive` (булево значение)

//* ```javascript

const student = {
	name: '',
	age: 0,
	courses: ['Eng', 'De', 'Rus', 'Chinese'],
	isActive: true,
}

//* ```

//! ### Задание 2: Изменение объекта
// Измените объект `student`:
// 1. Добавьте свойство `university` со значением "University of Technology"
// 2. Удалите свойство `isActive`
// 3. Измените значение свойства `age` на 21

//* ```javascript

student.university = 'University of Technology'
delete student.isActive
student.age = 21

console.log(student)

//* ```

//! ## 2. Работа со строками и их методами

// ### Задание 3: Методы строк
// Дана строка: `const text = " JavaScript is Awesome! ";`
// Выполните следующие операции и выведите результаты:
// 1. Удалите пробелы в начале и конце строки
// 2. Преобразуйте строку к нижнему регистру
// 3. Проверьте, содержит ли строка слово "Awesome"
// 4. Замените "JavaScript" на "TypeScript"
// 5. Разделите строку на массив слов

//* ```javascript
const text = ' JavaScript is Awesome! '

// console.log(text.trim());
// console.log(text.toUpperCase());
// console.log(text.includes("awesome"));
// console.log(text.replace("JavaScript", "Typescript"));
// console.log(text.split(""));

//* ```

//! ## 3. Работа с массивами и их методами

// ### Задание 4: Методы массивов
// Дан массив: `const numbers = [10, 20, 30, 40, 50];`
// Выполните следующие операции:
// 1. Добавьте число 60 в конец массива
// 2. Удалите первый элемент массива
// 3. Добавьте число 5 в начало массива
// 4. Создайте новый массив, который содержит элементы с индексами от 1 до 3
// 5. Найдите индекс элемента со значением 30

//* ```javascript
//  0   1   2   3   4
const numbers = [10, 20, 30, 40, 50]

// numbers.push(60);
// numbers.shift();
// numbers.unshift(5)
// const newArray = numbers.slice();
// console.log(numbers.includes(50));

console.log(numbers)

//* ```

//! ### Задание 5: Комбинирование методов
// Создайте массив из строки "apple,banana,cherry" и преобразуйте все элементы к верхнему регистру.

//* ```javascript
const fruitsString = 'apple,banana,cherry'

const newArray = fruitsString.split(',').map(item => {
	return item.toUpperCase()
})

console.log(newArray)

//* ```

//! ## 4. Практическое задание

// ### Задание 6: Объект с методами
// Создайте объект `calculator` с тремя методами:
// - `add(a, b)` - возвращает сумму a и b
// - `multiply(a, b)` - возвращает произведение a и b
// - `getOperations()` - возвращает строку с описанием всех доступных операций

//* ```javascript

// const calculator = {
// 	add: (a, b) => {
// 		return a + b;
// 	},
// 	multiply: (a, b) => {
// 		return a * b;
// 	},
// 	getOperations: () => {
// 		return 'Метод add() суммирует. Медод multiply() умнажает';
// 	}
// }

// const summa = calculator.add(10, 32);
// console.log(summa);

// const multi = calculator.multiply(2, 8);
// console.log(multi);

// const operations = calculator.getOperations();
// console.log(operations);

// function add(a, b) {
// 	return a + b;
// }

// function multiply(a, b) {
// 	return a * b;
// }

// function getOperations() {
// 	return 'Метод add() суммирует. Медод multiply() умнажает';
// }

// const summa = add(10, 32);
// console.log(summa);

// const multi = multiply(2, 8);
// console.log(multi);

// const operations = getOperations();
// console.log(operations);

//* ```

//! ### Задание 7: Работа с данными
// Создайте массив объектов `books`, где каждый объект представляет книгу со свойствами:
// - `title` (название)
// - `author` (автор)
// - `year` (год издания)

// Напишите функцию, которая:
// 1. Добавляет новую книгу в массив
// 2. Возвращает массив книг определенного автора
// 3. Возвращает массив книг, изданных после заданного года

//* ```javascript


const books = [
	{
		title: "Book 1",
		author: "Author 1",
		year: 2001
	}, 
	{
		title: "Book 2",
		author: "Author 2",
		year: 2002
	}, 
	{
		title: "Book 3",
		author: "Author 3",
		year: 2003
	}
];

function addBook(book) {
	books.push(book);
}

function findAuthorBooks(author) {
	return books.find((item) => {
		return item.author == author
	})
}

function findBooksByYear(year) {
	return books.find((item) => {
		return item.year == year
	})
}


addBook(
	{
		title: "Book 4",
		author: "Author 4",
		year: 2004
	}
)

// console.log(findBooksByYear(2001));
// console.log(findAuthorBooks("Author 4"));
// console.log(books);



//* ```

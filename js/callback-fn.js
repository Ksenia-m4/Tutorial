// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", function greet(name) {
//   // если колбєк функция маленькая записіваем ее внутри скобок
//   console.log(`Ласкаво просимо ${name}.`);
// });

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });
// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// ПЕРЕБИРАЮЩИЕ МЕТОДЫ JS
//
// .forEach()
// const numbers = [5, 10, 15, 45, 78];
// // Array.prototype.forEach()
// // forEach(callbackFn, thisArg)
// // thisArg - обьект, в контексте которого будет выполнена коллбэк функция
// // callbackFn - function (number, index, array)

// numbers.forEach(function (number, index, array) {
//   // number - это элемент массива, forEach делает копию. если лежит примитив он создает копию. если сложный тип данных там лежит ссылка

//   console.log("number", number);
// });

// .map()
// Array.prototype.map()
// map(callbackFn, thisArg)
// возвращает новый массив с таким же кол-вом элементов что и оригинальный
// const numbers = [5, 10, 15, 45, 78];

// const doubleNumbers = numbers.map(function (number) {
//   console.log(number); //
//   return number * 2;
// });

// console.log(doubleNumbers);//

// переписываю на стрелки

// const doubleNumbers = numbers.map((number) => number * 2); // вот она, идеальная в одну строку
// console.log(doubleNumbers);

// const numbers2 = [1, 4, 9];
// const roots = numbers2.map((num) => Math.sqrt(num));
// console.log(numbers2);
// console.log(roots);

// .filter()
// Array.prototype.filter()
// если true, добавляет в новый массив, нет - пропускает
// const numbers = [5, 10, 15, 45, 78];
// const filtredNumbers = numbers.filter((number) => number > 10);
// console.log(filtredNumbers);

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// // console.log(students);
// const allCourses = students.flatMap((student) => student.courses); // Это идентично map функции, с последующим применением функции flat с параметром depth ( глубина ) равным 1
// console.log(allCourses);

// // const uniqueCourses = allCourses.filter(
// //   (course, index, array) => array.indexOf(course) === index
// // );

// const uniqueCourses = allCourses.filter((course, index, array) => {
//   return array.indexOf(course) === index;
//   //   console.log(course);
//   //   console.log(index);
//   console.log(array);
// });

// console.log(uniqueCourses);

// .reduce()
// Не изменяет оригинальный массив.
// Поэлемент перебирает оригинальный массив.
// Возвращает все, что угодно.
// Делает все что угодно.

// array.reduce(callback[, initialValue])
// array.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

// const numbers = [5, 10, 15, 45, 78];

// const total = numbers.reduce((acc, value) => {
//   console.log("acc", acc);
//   console.log("value", value);
//   return acc + value;
// }, 0);

// console.log(total);
// делаю в одну строку
// const numbers = [5, 10, 15, 45, 78];
// const total = numbers.reduce((acc, value) => acc + value, 0);
// console.log(total);

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const totalSalary = Object.values(salaries).reduce(
//   (total, value) => total + value,
//   0
// );

// console.log(totalSalary);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const totalScore = students.reduce(
//   (totalScore, student) => totalScore + student.score,
//   0
// );
// console.log(totalScore);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const allTags = tweets.reduce((tags, tweet) => {
//   tags.push(...tweet.tags); // каждый из элементов массива распыляем в аргумент метода push и он пушится каждый отдельно // линетры не любят когда идет мутация кода, т.е перезаписывание изначальных данных
//   return tags;
// }, []); //  в отличие от предыдущих примеров, в первоначальное значение аккумулятора тут значение пустой массив
// console.log(allTags);

// const allTags = tweets.reduce((tags, tweet) => {
//   return [...tags, ...tweet.tags]; // чтобы избежать изменения через пуш, можно распылить вначале старые теги и добавить новые и собрать опять в массив. фактически мы создаем массив, на каждой итерации мы добавялем в него распыленный массив аккумулятора и распыленные теги из текущей итерации и заново собираем в массив
// }, []);
// console.log(allTags);

// а теперь нужно получить что-то типа такого
// {
//     js: 3,
//     html: 1;
//  }
// если свойство с ключем tag есть увеличить его на 1, елси нет - создать его и записать 1
// const uniqueTags = allTags.reduce((acc, tag) => {
//   //   console.log(tag);
//   console.log(acc); // раскоментируй эту строку чтобы видеть что происходит на каждой итерасции

//   if (acc[tag]) {
//     //вернет не underfind, т.е true
//     acc[tag] += 1;
//     return acc;
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});

// console.log(uniqueTags);

// переписывам имутабельно
// const uniqueTags = allTags.reduce((acc, tag) => {
//   //   console.log(tag);
//   console.log(acc); // раскоментируй эту строку чтобы видеть что происходит на каждой итерасции

//   if (acc[tag]) {
//     //вернет не underfind, т.е true
//     // acc[tag] += 1;
//     return {
//       ...acc,
//       [tag]: acc[tag] + 1,
//     };
//   }
//   //   acc[tag] = 1;
//   return {
//     ...acc,
//     [tag]: 1,
//   };
// }, {});

// console.log(uniqueTags);

// переписываем на тернарник
// const uniqueTags = allTags.reduce((acc, tag) => {
//   return { ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 };
// }, {});

// console.log(uniqueTags);

// переписываем без return
// const uniqueTags = allTags.reduce(
//   (acc, tag) => ({
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   }),
//   {}
// );

// console.log(uniqueTags);

//arr.sort([compareFunction])
// .sort(callback(currentEl, nextEl){})
// Сортирует и изменяет исходный массив.
// Возвращает измененный массив, то есть ссылку на отсортированный выходной.
// По умолчанию сортирует по возростанию
// Сортировка производится путем приведения значений к строке и сравнения порядковых номеров в таблице Unicode.
// если нам не подходит по возростанию, надо передавать callbackfn compareFunction

// массив.sort((a, b) => {
//   // Тіло колбек-функції
// });
// a– первый элемент для сравнения.
// b– второй элемент для сравнения.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((curEl, nextEl) => curEl - nextEl); // числа будут отображены по возростанию

// // console.log(ascendingScores);

// const descendingScores = [...scores].sort((curEl, nextEl) => nextEl - curEl); // числа будут отображены по убыванию
// console.log(descendingScores);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const ascendingScores = [...students].sort(
//   (curEl, nextEl) => curEl.score - nextEl.score
// );
// console.log(ascendingScores);

// const descendingScores = [...students].sort(
//   (curEl, nextEl) => nextEl.score - curEl.score
// );
// console.log(descendingScores);

// const sortingByName = [...students].sort((prevEl, nextEl) => {
//   if (prevEl.name[0] < nextEl.name[0]) {
//     return -1;
//   }
//   return 0;
// });
// console.table(sortingByName);

// .flat & .flatMap
const arr = [1, 2, 3, [4, 5, 9, [7, 8, 9, 45], 4, 75, 45], 65, 58];
// console.log(arr.flat(2));

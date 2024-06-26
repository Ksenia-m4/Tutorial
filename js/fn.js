//
// напиши функцию, которая будет складывать все элементы из массива

// const cart = [10, 2, 5, 7, 3];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log(total);

// Функциональное выражение (function expression)
// const calculateTotalPrice = function (items) {
//   //   console.log(items);
//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log(calculateTotalPrice([1, 5, 8]));

// 2)
// поищем поли и создадим функцию
// напиши функцию findLogin(allLogins, login) для поиска логина

// const logins = ["mango", "poly", "ajax", "kiwi"];
// const loginToFind = "poly";
// let message = `Логин ${loginToFind} не найден`;

// 1
// if (logins.includes(loginToFind)) {
//   console.log(`твой логин ${loginToFind} существует`);
// } else console.log(`Логин ${loginToFind} не найден`);

// 2
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginToFind) {
//     message = `логин ${loginToFind} существует`;
//     break;
//   }
//   message = `Логин ${loginToFind} не найден`;
// }

//тернарный вариант
// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `твой логин ${loginToFind} существует`
//     : `Логин ${loginToFind} не найден`;
// };

// console.log(findLogin(logins, "mango"));
// console.log(findLogin(logins, "poly1"));
// console.log(findLogin(logins, "ajax"));
// console.log(findLogin(logins, "kiwi"));

// другой вариант
// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `твой логин ${loginToFind} существует`;
//     }
//   }
//   return `Логин ${loginToFind} не найден`;
// };

// console.log(findLogin(logins, "mango"));
// console.log(findLogin(logins, "poly1"));
// console.log(findLogin(logins, "ajax"));
// console.log(findLogin(logins, "kiwi"));

// следующая задачка: напиши скрипт с функцией findSmallestNumber поиска самого маленького числа в массиве, при условии, что числа уникальные и не повторяются.
// const numbers = [42, 5, 10, 22, 102, 3];
// let smallestNunber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNunber) {
//     smallestNunber = number;
//   }
// }

// console.log(smallestNunber);

// const findSmallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// };

// console.log(findSmallestNumber([4, 1, 2, 8, 9]));
// console.log(findSmallestNumber([45, 56, 58, -96, 254]));
// console.log(findSmallestNumber([5, 84, 85, 11, 8]));
// console.log(findSmallestNumber([48, 56, 84, 75, 24, 3]));

// следующая задача Напиши функцию changeCase, которая заменяет регистр каждого символа в строке на противоположный
// например JavaScript на jAVAsKRIPT

// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";

// for
// for (const letter of letters) {
//   //   console.log(letter);
//   if (letter === letter.toLowerCase()) {
//     // letter.toUpperCase();
//     // console.log("эта буква в нижнем регистре", letter);
//     invertedString += letter.toUpperCase();
//   } else {
//     invertedString += letter.toLowerCase();
//   }
// }
// console.log(invertedString);

// тернарный оператор
// for (const letter of letters) {
//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }
// console.log(invertedString);

// first example
// const changeCase = function (string) {
//   const letters = string.split("");
//   let invertedString = "";
//   for (const letter of letters) {
//     invertedString +=
//       letter === letter.toLowerCase()
//         ? letter.toUpperCase()
//         : letter.toLowerCase();
//   }
//   return invertedString;
// };

// second example
// const changeCase = function (string) {
//   const letters = string.split("");
//   let invertedString = "";

//   for (const letter of letters) {
//     if (letter === letter.toLowerCase()) {
//       letter.toUpperCase();
//       invertedString += letter.toUpperCase();
//     } else {
//       invertedString += letter.toLowerCase();
//     }
//   }

//   return invertedString;
// };

// console.log(changeCase("ManGo"));
// console.log(changeCase("kiWI"));
// console.log(changeCase("poLy"));

// следующая задача
// делаем функцию slugify(string) из slug по названии статьи
// заголовок статьи состоит из слов и пробелов
// привести к нижнему регистру

// const normalizedTitle = title.toLowerCase();

// const words = normalizedTitle.split(" ");

// const slug = words.join("-");
// console.log(slug);

//чейнинг

// const slugUpper = title.toLowerCase().split(" ").join("-");
// console.log(slugUpper);
// let url = "";
// let words = "";

// words = normalizedTitle.split(" ");
// for (const word of words) {
//   console.log(words.join("-"));
// }

// const slugify = function (string) {
//   return string.toLowerCase().split(" ").join("-");
// };

// console.log(slugify("Top 10 benefits of React framework"));
// console.log(slugify("What Is JavaScript Used For?"));
// console.log(slugify("What are Functions?"));
// console.log(
//   slugify("How I Went from Drum Teacher to Software Engineer in 12 Months")
// );

// преобразуем псевдомассив в массив

// array.from - oldSchool
// const fn = function () {
//   console.log(arguments);

//   const arg = Array.from(arguments);

//   console.log(arg);
// };

// ...(rest) - более новый способ
// const fn = function (...args) {
//   console.log(args);
// };

// fn(1, 2, 6, 8);
// fn(25, 85, 45);
// fn(45, 78, 951);

// следующая задача
// функция filterNumbers (array [number 1,...])
// первым аргументом передает массив чисел
// после первого аргумента может быть произвольное кол-во чисел
// функция должна вернуть новый массив в котором будут только аргумнты начиная со второго
// для которых есть аналог в оригинальном массиве

// const filterNumbers = function (array, ...args) {
//   const uniqueElements = [];
//   // console.log(array);
//   // console.log(args);

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);
//     }
//   }
//   return uniqueElements;
// };

// console.log(filterNumbers([11, 2, 3, 4], 10, 5, 3, 11, 7));

// следующая задачка
// const array = [1, null, 78, 8, [1, 2, 3]];
// console.log(array);

// for (const item of array) {
//   if (Array.isArray(item)) {
//     console.log(item);
//   }
// }

// example 1

// const genres = ["Jazz", "Blues"];
// // добавить Рок-н-рол в конец
// genres.push("Рок-н-рол");
// // выведите в консоль первый элемент массива
// console.log(genres[0]);
// // вывести в консоль последний элемент массива
// console.log(genres[genres.length - 1]);
// // удалить первый элемент и вывести его в консоль
// const firstGenre = genres.splice(0, 1);
// console.log(firstGenre);
// // вставьте 'Country' и 'Reggae' в начало массива
// genres.splice(0, 0, "Country", "Reggae");
// console.log(genres);

// example 2

// написать скрипт, который будет высчитывать площадь прямоугольника со сторанми, указанными в переменной values в форме строки, значение гаратировано разделяется пробелом

// const value = "8 11";
// const arr = value.split(" ");
// let result = 0;

// console.log(arr);
// // переменные
// // из строки делать массив. разделить массив на элементы, которые разделены пробелом
// // умножить элементы массива между собой
// const first = Number(arr[0]);
// const last = Number(arr[1]);
// result = first * last;
// console.log(result);

// example 3 перебор массива
//напиши скрипт для перебора массива fruits через for.
// для каждого элемента массива вывести в консоль строку номер_элемента : название элемента
// нумерация должна начинаться с 1

// const fruits = ["apple", "orange", "lemon", "apricot", "peach"];

// for (let i = 0; i < fruits.length; i++) {
//   const element = fruits[i];
//   //   console.log(i + 1, ":", element);
//   console.log(`${i + 1} : ${element}`);
// }

// но лучше расширить метод for
// for (let i = 0, n = 1; i < fruits.length; i += 1, n += 1) {
//   console.log(`${n} - ${fruits[i]}`);
// }

// example 4 массивы и циклы
// напиши скрипт, который выводит в консоль имя и телефонный номер пользователя
// в переменных names и phones хранятся имена и телефонные номера разделенные запятыми
// порядковый номер имен и телефонов в строках указывают на соответствие
// кол-во телефонов и имен гарантовано одинаково

// let names = "Jacob,Maria,Ruben,Aleksandr";
// let phones = "14718960932,12507914080,16281820195,11948218654";

// names = names.split(",");
// // console.log(names);
// phones = phones.split(",");
// // console.log(phones);

// // мы перебираем аж два массива, это невероятно...
// for (let i = 0; i < names.length, i < phones.length; i += 1) {
//   // const element = array[i];
//   console.log(`${names[i]} - ${phones[i]}`);
// }

// example 5 массивы и строки
// напиши скрипт, который выводит в консоль все слова строки кроме первого и последнего. строка не должна начинаться или заканчиваться пробелом. скрипт должен работать с любым рядком

// const string = "Welcome to the future";

// const arr = string.split(" ");

// const result = arr.slice(1, arr.length - 1);

// console.log(result);

// либо так
// const string = "Welcome to the future";
// // через метод slice мы можем обратиться к последнему элементу через минус, здесь это последний элемент массива
// const result = string.split(" ").slice(1, -1).join(" ");
// console.log(result);

// example 6 массивы и строки
// напиши скрипт, который разворачивает строку в обратном порядке букв и выводит в консоль
// const string = "Welcome to the future";
// const arr = string.split("").reverse().join("");
// console.log(arr);

// example 7 сортировка массива с циклом
// напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента

// const langs = ["pyton", "js", "php", "c++", "haskel", "ruby"];
// for (const lang of langs) {
//   langs.sort();
// }
// тут без цикла через sort()
// const result = langs.sort();
// console.log(result);

// а это через цикл for (хотя не понятно, мы же так по нормальному и не отсортировали..)
// const langs = ["pyton", "js", "php", "c++", "haskel", "ruby"];

// for (let i = 0; i < langs.length; i += 1) {
//   if (langs[0] > langs[i]) {
//     // метод splice возвращает нам массив и чтобы обратиться к нему а не к массиву мы должны к нему обратиться по индексу
//     const result = langs.splice(i, 1)[0];
//     langs.unshift(result);
//   }
// }
// console.log(langs);

// example 8 сортировка массива с циклом
// напиши скрипт поиска наименьшего числа в массиве.
// код должен работать для любых чисел
// используй цикл для решения задачи

// допускаем, что первое число массива и есит самое минимальное число
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }

// console.log(min);

// const test = [1, 2, 3];

// function foo(arr) {
//   // let test = arr - фактически внутри функции происходит это
//   arr.splice(0, 1); //удаляем первый элемент
// }

// foo(test);
// console.log(test); //массив 2, 3

// function example 1 - высчитываем массу тела
// напиши функцию calcBMI(weight, height), которая подсчитывает индекс массы тела.
// для этого надо разделить вес в килограммах на квадрат высоты человека в метрах
// вес и высота будет переданы как строки, не всегда целые числа а разделены запятой.
// индекс массы тела надо округлить до одной цифры после разделителя (запятой или точкой)

// const bmi = calcBMI("88,3", "1.75");

// function calcBMI(weight, height) {
//   weight = Number(weight.replace(",", "."));
//   height = Number(height.replace(",", "."));

//   // console.log(weight);
//   // height = Math.pow(height, 2);
//   // console.log(height);

//   // let result = weight / height;
//   // return result.toFixed(1);

//   // но лучше одной строкой без дополнительных переменных
//   return Number((weight / height ** 2).toFixed(1));
// }

// console.log(bmi);

// function example 2 - возвращает наименьшее число
// напиши функицю min(a,b) которое возвращает наименьшее число из a и b
//

// function min(a, b) {
//   // if (a < b) {
//   //   return a;
//   // }
//   // return b;
//   return a > b ? b : a;
// }

// console.log(min(1, 15));
// console.log(min(1, -11));
// console.log(min(52, 24));

// function example 3 - площадь прямоугольника
// напиши функицю getRectArea(dimensions) для вычисления площади сторон треугольника со сторонами,\
// значения будут предаваться в парамент в виде строки
// значения гарантировано разделены пробелом
//

// function getRectArea(dimensions) {
//   dimensions = Array.from(dimensions.split(" "));
//   return Number(dimensions[0] * dimensions[1]);
// }

// console.log(getRectArea("8 11"));

// function example 4 - логирование элементов
// напиши функицю logItems(items), которая получает массив и использует цикл for который для каждого элемента
// выводит в консоль сообщение в формате номер_элемента - значение_элемента
// нумерация наичнается с 1

// function logItems(items) {
//   for (let i = 0, num = 1; i < items.length; i += 1, num += 1) {
//     console.log(`${num} : ${items[i]}`);
//   }
// }

// console.log(logItems(["apple", "orange", "lemon", "apricot", "peach"]));
// console.log(logItems(["Jacob", "Maria", "Ruben", "Aleksandr"]));

// function example 5 - логирование контактов
// напиши функцию, printContactsInfo(names, phones) которая выводит в консоль имя и телеыон пользователя
// в параметры names будет переданы строки имен и телефонных номеров, разделенные запятыми
// порядковый номер имен и телефонов отвечают за соответсвие
//кол-во имен и телефонов одинаковая

// function printContactsInfo(names, phones) {
//   names = names.split(",");
//   // console.log(names);
//   phones = phones.split(",");
//   // console.log(phones);

//   for (let i = 0; i < names.length, i < phones.length; i += 1) {
//     console.log(`${names[i]} - ${phones[i]}`);
//   }
// }

// console.log(
//   printContactsInfo(
//     "Jacob,Maria,Ruben,Aleksandr",
//     "14718960932,12507914080,16281820195,11948218654"
//   )
// );

// function example 6 - поиск наибольшего элемента
// напиши функцию findLargestNumber(numbers), которая ищет наибольшее чиcло среди переданных чисел
// если не знаем сколько значений будет передано в arguments, лучше оставлять скобки пустыми, если мы указываем там (numbers) тогда даже если передали много значений функция видит только первое значение

// function findLargestNumber() {
//   //в (...args) - в данном случае мы сразу передаем что мы не знаем сколько будет аргументов
//   let numbers = Array.from(arguments);
//   // console.log(numbers);

//   let max = numbers[0];
//   for (let i = 0; i < numbers.length; i += 1) {
//     // console.log(numbers[i]);
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37, -55, 155));
// console.log(findLargestNumber(49, 4, 7, 83, 12));

// а если в первый индекс нам может приходиь массив
// магия
// function findLargestNumber() {
//   let max;

//   for (const num of arguments) {
//     if (typeof num === "number") {
//       max = num;
//       break; // прерываем цикл потому что мы нашли что искали
//     }
//   }

//   for (const num of arguments) {
//     if (typeof num === "number") {
//       if (num > max) {
//         max = num;
//       }
//     } else {
//       max = findLargestNumber(...num); // напиши в max резульат нашей функции и распыли наш массив (...num)
//     }
//   }
//   return max;
// }

// console.log(
//   findLargestNumber([
//     1,
//     143,
//     [111, [152, [425, 52, 1, 5], 52], 2, 3],
//     49,
//     4,
//     7,
//     83,
//     12,
//   ])
// );

// function example 7 - среднее значение
// напиши функцию calAverage() {} котрая принимает любое кол-во аргументов и возвращает среднее значение
// все аргусменты это числа
// это мой вариант
// function calAverage() {
//   let arr = Array.from(arguments);
//   let sum = 0;
//   let result;

//   for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
//     result = sum / arr.length;
//   }

//   return result;
//   // console.log(sum);
// }

// console.log(calAverage(1, 2, 3, 4));
// console.log(calAverage(14, 8, 2));
// console.log(calAverage(27, 43, 2, 8, 36));

// это было расписано лектором
// function calAverage() {
//   let total = 0;
//   for (const num of arguments) {
//     total += num;
//   }
//   return total / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4));
// console.log(calAverage(14, 8, 2));
// console.log(calAverage(27, 43, 2, 8, 36));

// function example 8 - форматирование времени
// напиши функцию formatTime(minutes) {} котрая переведет кол-во минут в строку кол-во часов и кол-во минут HH : MM
//

// let hours;
// let minutes;

// function formatTime(minutes) {
//   let totalMinutes = minutes;
//   // console.log(typeof minutes);
//   hours = Math.floor(totalMinutes / 60);

//   const doubleDigitHours = String(hours).padStart(2, 0);
//   // console.log(typeof hours);
//   minutes = totalMinutes % 60;
//   const doubleDigitMinutes = String(minutes).padStart(2, 0);
//   // console.log(typeof minutes);
//   return `${doubleDigitHours}:${doubleDigitMinutes}`;

//   // либо использовать тут метод .toString().padStart(2, 0)
// }

// console.log(formatTime(70));
// console.log(formatTime(450));
// с(formatTime(1441));

// function example 9 -коллекция курсов (includes, indexOf, push)
// напиши функции для работы с коллекцией учебных курсов

const courses = ["HTML", "CSS", "Js", "React", "PostgreSQL"];

// addCourse(name) добавляет курс в конец коллекции

// updateCourse(oldName, newName) изменяет имя на новое

// если есть должно вывести в консоль "У вас уже есть этот курс"

// function addCourse(course) {
//   if (courses.includes(course)) {
//     return "У вас уже есть этот курс";
//   }
//   courses.push(course);

//   return `${course} добавлен в ваш список кусов`;
// }

// console.log(addCourse("Express"));
// console.log(courses);

// removeCourse(name) удаляет курс из коллекции

// function removeCourse(course) {
//   // Мой первоначальный вариант
//   // if (courses.includes(course)) {
//   //   courses.splice(courses.indexOf(course), 1);
//   //   console.log(`${course} удален из вашего списка курсов`);
//   // } else {
//   //   console.log(`${course} не найден в списке кусров`);
//   // }

//   // но лучше сделать
//   let idx = courses.indexOf(course);
//   // console.log(idx);

//   if (!!~idx) {
//     courses.splice(idx, 1);
//     return "удален из вашего списка курсов";
//   }

//   return "такого курса не найдено";
// }

// console.log(removeCourse("CSS"));
// console.log(courses);
// console.log(removeCourse("Vue"));

// function updateCourse(oldName, newName) {
//   let idx = courses.indexOf(oldName);
//   if (!!~idx) {
//     courses.splice(idx, 1, newName);
//     return `${oldName} заменили на ${newName}`;
//   }

//   return "такого курса не найдено";
// }

// console.log(updateCourse("Express", "NestJS"));
// console.log(courses);
//

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";
//   return message;
//   // Change code above this line
// }

// console.log(checkStorage(100, 50));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message =
//     password === "jqueryismyjam"
//       ? "Access is allowed"
//       : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// console.log(getSubscriptionPrice("professional"));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("mangohackzor"));

// Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.
// Список стран и стоимость доставки:

// China - 100 кредитов
// Chile - 250 кредитов
// Australia - 170 кредитов
// Jamaica - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//   let message;
//   let price;
//   // Change code below this line
//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Australia":
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost("China"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));

// Дополни код функции так, что если длина строки:
// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   // console.log(message);
//   // console.log(message.length);
//   // console.log(maxLength);

//   result =
//     message.length <= maxLength ? message : `${message.slice(0, maxLength)}...`;

//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   message = message.toLowerCase();
//   result = message.includes("spam") || message.includes("sale");

//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = "Вы совершеннолетний человек";
//   } else {
//     message = "Вы не совершеннолетний человек";
//   }

//   return message;
// }

// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:

// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line;

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";

//   // Change code above this line
// }

// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате.
// Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   } else if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// function getExtremeElements(array) {
//   // Change code below this line
//   const lastElement = array[array.length - 1];

//   return [array[0], lastElement];

//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log();

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log();

// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let words = message.split(" ");
//   return words.length * pricePerWord;
//   // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
//   // Change code below this line

//   return title.toLowerCase().split(" ").join("-");

//   // Change code above this line
// }

// // Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"

// console.log(slugify("Arrays for begginers"));
// console.log();

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// // Значение переменной lastThreeEls это массив ["pear", "orange", "banana"]
// console.log(firstTwoEls);

// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.
// Объявлена функция makeArray(firstArray, secondArray, maxLength)

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let makeArray;
//   makeArray = firstArray.concat(secondArray);

//   return makeArray.slice(0, maxLength);

//   // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

// Вызов makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) возвращает ["Mango", "Poly", "Ajax"]

// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//   // Change code below this line
//   let result = 0;
//   for (let i = 0; i <= number; i += 1) {
//     result += i;
//   }

//   return result;

//   // Change code above this line
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log();

// Вызов функции calculateTotal(1) возвращает 1
// Вызов функции calculateTotal(3) возвращает 6
// Вызов функции  возвращает 28

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503

// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   // Change code below this line
//   let arr = string.split(" ");
//   // console.log(arr);
//   let longestWord = arr[0];
//   let maxlength = 0;
//   // console.log(max);

//   for (let i = 0; i < arr.length; i += 1) {
//     let word = arr[i];
//     // console.log(word.length);
//     if (word.length > maxlength) {
//       maxlength = word.length;
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }
// // Change code above this line

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
// console.log();

// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   // numbers.push(min);

//   for (let i = min - 1; i < max; i += 1) {
//     numbers.push(i + 1);
//   }

//   // Change code above this line
//   return numbers;
// }

// // console.log();

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log();

// Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
// Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
// Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
//

// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
//   // Change code below this line
//   let arr = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       arr.push(numbers[i]);
//     }
//   }

//   return arr;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));

// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]

// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let commonArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       commonArray.push(array1[i]);
//     }
//   }
//   return commonArray;

//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]

// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const item of order) {
//     total += item;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log();

// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503

// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const item of numbers) {
//     if (item > value) {
//       filteredNumbers.push(item);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));

// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]

// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   // Change code below this line

//   let evenNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }

//   return evenNumbers;
//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// Объявлена функция getEvenNumbers(start, end)
// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
// Вызов функции getEvenNumbers(8, 8) возвращает [8]
// Вызов функции getEvenNumbers(7, 7) возвращает []
// Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив

// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   return number;
//   // Change code above this line
// }

// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//   // Change code below this line
//   if (!!~array.indexOf(value)) {
//     return true;
//   }
//   return false;

//   // Change code above this line
// }

// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );

// Объявлена функция includes(array, value)
// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
// Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
// Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
// Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
// Вызов includes() для случайного массива со случайным value возвращает верный boolean
// В функции includes используется for, return, но не метод массива includes



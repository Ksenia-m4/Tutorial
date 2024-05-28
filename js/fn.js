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
const fn = function (...args) {
  console.log(args);
};

fn(1, 2, 6, 8);
fn(25, 85, 45);
fn(45, 78, 951);

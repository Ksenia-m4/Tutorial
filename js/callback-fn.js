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
// // // Array.prototype.forEach()
// // // forEach(callbackFn, thisArg)
// // // thisArg - обьект, в контексте которого будет выполнена коллбэк функция
// // // callbackFn - function (number, index, array)

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
// //   (course, index, array) => array.indexOf(course) === index // indexOf возвращает первый индекс который найдет в массиве
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

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

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
// a первый элемент для сравнения.
// b второй элемент для сравнения.

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
// const arr = [1, 2, 3, [4, 5, 9, [7, 8, 9, 45], 4, 75, 45], 65, 58];
// console.log(arr.flat(2));

// Example 1 - Коллбек функції
// Напишіть такі функції:

// createProduct(obj, callback) - приймає об'єкт товару без ID, а також колбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор як id і викликає колбек передаючи йому створений об'єкт.
// logProduct(product) - коллбек, що приймає об'єкт продукту і логує його в консоль
// logTotalPrice(product) - коллбек, що приймає об'єкт продукту і логує загальну вартість товару в консоль

// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   callback(product);
//   console.log(product);
// }
// function logProduct(obj) {
//   console.log(`Product ${obj.name}`);
// }
// function logTotalPrice({ price, quantity }) {
//   console.log(`Total price ${price * quantity}`);
// }

// createProduct(
//   {
//     name: "🍋",
//     price: 20,
//     quantity: 5,
//   },
//   logProduct
// );
// createProduct(
//   {
//     name: "🍎",
//     price: 30,
//     quantity: 3,
//   },
//   logTotalPrice
// );

// Example 2 - Коллбек функції

// Додайте в об'єкт account  методи з записом
// withdraw(amount,  onSuccess, onError) та deposit(amount, onSuccess, onError) де перший параметр це сума операції, а другий і третій - колбеки.
// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance та onSuccess в іншому випадку.
// Метод deposit  викликає onError якщо amount більше TRANSACTION_LIMIT або меньше або дорівнює нулю, та onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     // Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance та onSuccess в іншому випадку.
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Вы превысили лимит. Лимит ${TRANSACTION_LIMIT}`);
//       return;
//     } else if (amount > this.balance) {
//       onError(`Недостаточно денег на счету. Ваш баланс ${this.balance}`);
//       return;
//     } else this.balance -= amount;
//     onSuccess(
//       `С вашего счета было снято ${amount} кредитов. Ваш баланс ${this.balance}`
//     );
//   },
//   deposit(amount, onSuccess, onError) {
//     // Метод deposit  викликає onError якщо amount більше TRANSACTION_LIMIT або меньше або дорівнює нулю, та onSuccess в іншому випадку.
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Вы превысили лимит. Лимит ${TRANSACTION_LIMIT}`);
//       return;
//     } else if (amount <= 0) {
//       onError(`Ошибка операции`);
//       return;
//     }

//     this.balance += amount;
//     onSuccess(
//       `На Ваш счет было засчитано ${amount} кредитов. Ваш баланс ${this.balance}`
//     );
//   },
// };

// function handleSuccess(message) {
//   console.log(`Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(800, handleSuccess, handleError);
// account.withdraw(100, handleSuccess, handleError);

// account.deposit(2000, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-500, handleSuccess, handleError);
// account.deposit(100, handleSuccess, handleError);

// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику колббека.

// function each(array, callback) {
//   for (const element of array) {
//     console.log(callback(element));
//   }
// }
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );

// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const createProduct = (obj, callback) => {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   callback(product);
//   console.log(product);
// };

const createProduct = (obj, callback) => callback({ id: Date.now(), ...obj });

// function logProduct(obj) {
//   console.log(`Product ${obj.name}`);
// }
// переписали на стрелку
const logProduct = (obj) => console.log(`Product ${obj.name}`);

// function logTotalPrice({ price, quantity }) {
//   console.log(`Total price ${price * quantity}`);
// }
// переписали на стрелку
const logTotalPrice = ({ price, quantity }) =>
  console.log(`Total price ${price * quantity}`);

// createProduct(
//   {
//     name: "🍋",
//     price: 20,
//     quantity: 5,
//   },
//   logProduct
// );
// createProduct(
//   {
//     name: "🍎",
//     price: 30,
//     quantity: 3,
//   },
//   logTotalPrice
// );

// Example 5 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    // Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance та onSuccess в іншому випадку.
    if (amount > TRANSACTION_LIMIT) {
      onError(`Вы превысили лимит. Лимит ${TRANSACTION_LIMIT}`);
      return;
    } else if (amount > this.balance) {
      onError(`Недостаточно денег на счету. Ваш баланс ${this.balance}`);
      return;
    } else this.balance -= amount;
    onSuccess(
      `С вашего счета было снято ${amount} кредитов. Ваш баланс ${this.balance}`
    );
  },
  deposit(amount, onSuccess, onError) {
    // Метод deposit  викликає onError якщо amount більше TRANSACTION_LIMIT або меньше або дорівнює нулю, та onSuccess в іншому випадку.
    if (amount > TRANSACTION_LIMIT) {
      onError(`Вы превысили лимит. Лимит ${TRANSACTION_LIMIT}`);
      return;
    } else if (amount <= 0) {
      onError(`Ошибка операции`);
      return;
    }

    this.balance += amount;
    onSuccess(
      `На Ваш счет было засчитано ${amount} кредитов. Ваш баланс ${this.balance}`
    );
  },
};

const handleSuccess = (message) => console.log(`Success! ${message}`);
const handleError = (message) => console.log(`Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError); //  я в вызове функции передаю коллбэк и он передается как аргумент в функцию высшего порядка
// account.withdraw(800, handleSuccess, handleError);
// account.withdraw(100, handleSuccess, handleError);

// account.deposit(2000, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-500, handleSuccess, handleError);
// account.deposit(100, handleSuccess, handleError);

// Example 5 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

const each = (array, callback) => {
  const newArr = [];
  for (const element of array) {
    newArr.push(callback(element));
  }
  return newArr;
};

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2)); //инлайн колбэк

// Example 6 - Метод forEach
// Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.

const logItems = (items) =>
  items.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// Example 7 - Метод forEach
// Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.

// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }
//   return total / args.length;
// }

const calculateAverage = (...arr) => {
  let total = 0;
  arr.forEach((item) => (total += item));
  return total / arr.length;
};

// console.log(calculateAverage(1, 2, 5, 8, 9, 4));

// ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВА
const arr = [1, 2, 3, 4, 5, 6, 7];

const result = arr.map((item) => {
  if (!(item % 2)) {
    return item * 2;
  }
  return item;
});
// console.log(result);

// Колекція об'єктів для всіх прикладів з автомобілями
const cars = [
  {
    //a
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    //b
    make: "Honda",
    model: "accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

//   Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле моделі) всіх автомобілів.

const getModels = cars.map((item) => item.model);
// console.table(getModels);

// Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінeнним значенням властивості price залежно від переданої знижки (%).

// это мой вариант
// const discount = 5;
// const makeCarsWithDiscount = cars.map(
//   (item) => item.price * (1 - discount / 100)
// );

// console.log(makeCarsWithDiscount);

// вариант с урока
const makeCarsWithDiscount = (cars, discount) => {
  console.table(cars);
  return cars.map((item) => ({
    ...item, // здесь важно помнить о приоритете, вначале распылили а потом переопределили значение price
    price: item.price * (1 - discount),
  }));
};

// console.table(makeCarsWithDiscount(cars, 0.2));
// // console.log(makeCarsWithDiscount(cars, 0.4));

// Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша за значення параметра threshold.

const filterByPrice = (cars, threshold) => {
  // console.table(cars);
  return cars.filter((item) => item.price < threshold);
};

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

const getCarsWithDiscount = (cars) => cars.filter((item) => item.onSale);

// console.table(getCarsWithDiscount(cars));

// Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів, тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) => cars.filter((car) => car.type === type);

// console.table(getCarsWithType(cars, "truck"));

// если с деструктуризацией и переменная переданная с функцией по названию такая же как и название ключа. тогда просто переименовывам название ключа
const getCarsWithType = (cars, type) =>
  cars.filter(({ type: carType }) => carType === type);

// console.table(getCarsWithType(cars, "truck"));

// // Example 6 - Метод find
// getCarByModel ищет по модели, передает массив и модель

const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(cars, "4Runner"));

// Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за збільшенням значення властивості amount.

const sortByAscendingAmount = (cars) => {
  console.table(cars);
  return [...cars].sort((a, b) => a.amount - b.amount); // мы не хотим все время сортировать оригинальный массив, поэтому вначале должны распылить объект через spread
};
// console.table(sortByAscendingAmount(cars));
// console.table(cars);

// Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів, відсортований за зменшенням значення властивості price.
const sortByDescendingPrice = (cars) =>
  [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));
// console.table(cars);

// Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотньому алфавітному порядку, залежно від значення параметра order.

// c урока
const sortByModel = (cars, order) =>
  [...cars].sort((a, b) =>
    order === "alphabetical"
      ? a.model.localeCompare(b.model)
      : b.model.localeCompare(a.model)
  );

// console.table(sortByModel(cars, "alphabetical"));
// console.table(sortByModel(cars, "inReverseOrder"));
// console.table(cars);

// Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = (cars) => {
//   const result = cars.reduce((totalAmount, { amount }) => {
//     return totalAmount + amount;
//   }, 0);
//   return result;
// };

// console.log(getTotalAmount(cars));

const getTotalAmount = (cars) =>
  cars.reduce((acc, { amount }) => acc + amount, 0); // более лаконично

// console.log(getTotalAmount(cars));

// Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, що зараз на розпродажі.

// console.table(cars);

const getAvailableCarNames = (cars) => {
  return cars
    .filter((car) => car.onSale)
    .map(({ model, make }) => `${make} ${model}`);
};

// console.table(getAvailableCarNames(cars));

// Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає список автомобілів на розпродажі (властивість onSale), відсортованих за зростанням ціни.

const getSortedCarsOnSale = (cars) => {
  return cars.filter((car) => car.onSale).sort((a, b) => a.price - b.price);
};

// console.table(getSortedCarsOnSale(cars));
const str = "lnjgftrfgkmnkhgjychvjhhg";

const foo = (abc) => {
  // [...abc];
  return [...abc];
};

// console.log(foo(str));

// АВТОПРОВЕРКА

// console.log(pointer);

// Задача 2/48 Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("margarita", makePizza));

// Задача 3/48 Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// // makePizza("Ultracheese", function);
// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// Задача 4/48 Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, makePizza, onOrderError) {
    for (const pizza of this.pizzas) {
      if (pizza === pizzaName) {
        return makePizza(pizzaName);
      }
    }
    return onOrderError(
      `There is no pizza with a name ${pizzaName} in the assortment.`
    );
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

// Задача 5/48 Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Change code above this line
//   return totalPrice;
// }

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach((item) => (totalPrice += item));
  return totalPrice;
}

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// Задача 6/48 Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// Задача 7/48 Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
  firstArray.forEach((number) => {
    if (secondArray.includes(number)) {
      commonElements.push(number);
    }
  });

  return commonElements;
  // Change code above this line
}

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// Задача 13/48 Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

function changeEven(numbers, value) {
  // Change code below this line
  const newArr = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArr.push(numbers[i] + value);
      // numbers[i] = numbers[i] + value;
    } else newArr.push(numbers[i]);
  }
  return newArr;
  // Change code above this line
}

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// Задача 14/48 Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);

// // массив.map((element, index, array) => {
// //   // Тело коллбек-функции
// // });
// console.log(planetsLengths);

// Задача 15/48

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// Change code below this line

// const titles = books.map((book) => book.title);

// Задача 16/48 Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// Change code below this line

// const genres = books.flatMap((book) => book.genres);

// console.log(genres);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// Задача 17/48 Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.

// const getUserNames = (users) => users.map((user) => user.name);

// console.log(getUserNames(users));

// const getUserEmails = (users) => users.map((user) => user.email);

// console.log(getUserEmails(users));

// Задача 19/48 Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter((item) => !(item % 2));
const oddNumbers = numbers.filter((item) => item % 2);

// console.log(evenNumbers);
// console.log(oddNumbers);

// Задача 20/48 Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (book, idx) => allGenres.indexOf(book) === idx
// );
// console.log(allGenres);
// console.log(uniqueGenres);

// Задача 21/48 Используя метод filter() дополни код так, чтобы:
// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// Change code below this line

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

//Задача 22/48 Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

// Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };
// Change code above this line

// console.log(getUsersWithEyeColor(users, "brown"));

// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];
// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age > minAge && user.age < maxAge);
};
// Change code above this line
// console.log(getUsersWithAge(users, 15, 32));

// Задача 24/48 Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};

// console.log(getUsersWithFriend(users, "Goldie Gentry"));

// Задача 25/48 Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);
//   const uniqueFriends = allFriends.filter(
//     (friend, idx) => allFriends.indexOf(friend) === idx
//   );
//   return uniqueFriends;
// };

// console.log(getFriends(users));

// Задача 26/48 Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive);
};

// console.log(getActiveUsers(users));

// Задача 27/48 Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.
const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};

// console.log(getInactiveUsers(users));

// Задача 29/48 Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every((item) => !(item % 2)); // на чётность.
const eachElementInFirstIsOdd = firstArray.every((item) => item % 2); // на нечётность.

const eachElementInSecondIsEven = secondArray.every((item) => !(item % 2)); // на чётность.
const eachElementInSecondIsOdd = secondArray.every((item) => item % 2); // на нечётность.

const eachElementInThirdIsEven = thirdArray.every((item) => !(item % 2)); // на чётность.
const eachElementInThirdIsOdd = thirdArray.every((item) => item % 2); // на нечётность.

// console.log(eachElementInFirstIsEven);

// Задача 31/48
//  Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.
const isEveryUserActive = (users) => {
  return users.every((user) => user.isActive);
};

// console.log(isEveryUserActive(users));

// Задача 34/48
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

// const totalPlayTime = playtimes.reduce((acc, item) => acc + item);

// Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime);

//Задача 35/48

//  Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce(
  (acc, player) => acc + player.playtime / player.gamesPlayed,
  0
);

// console.log(totalAveragePlaytimePerGame);
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.

const calculateTotalBalance = (users) => {
  return users.reduce((acc, el) => {
    return acc + el.balance;
  }, 0);
};
// console.log(calculateTotalBalance(users));

// масив.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);

//Задача 37/48 Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.

const getTotalFriendCount = (users) => {
  const newArr = users.reduce((acc, user) => {
    return [...acc, ...user.friends];
  }, []);
  return newArr.length;
};

// console.log(getTotalFriendCount(users));

// Задача 38/48
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

//Задача 39/48
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// Задача 41/48 Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

// Задача 42/48 Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).
const sortByAscendingBalance = (users) => {
  return [...users].sort((a, b) => a.balance - b.balance);
};

// console.log(sortByAscendingBalance(users));

// Задача 43/48
//  Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).
const sortByDescendingFriendCount = (users) => {
  return [...users].sort(({ friends: a }, { friends: b }) => {
    return b.length - a.length;
  });
};

// console.log(sortByDescendingFriendCount(users));

// Задача 44/48 Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.
const sortByName = (users) => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
};

// console.log(sortByName(users));

// Задача 45/48 Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));
// console.log(names);

// Задача 46/48
//  Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).

const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort(({ friends: a }, { friends: b }) => a.length - b.length)
    .map((user) => user.name);
};

// console.log(getNamesSortedByFriendCount(users));
// {
//   name: "Sheree Anthony",
//   email: "shereeanthony@kog.com",
//   eyeColor: "brown",
//   friends: ["Goldie Gentry", "Briana Decker"],
//   isActive: true,
//   balance: 2764,
//   gender: "female",
// },

// Задача 47/48 Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

const getSortedFriends = (users) => {
  return [...users]
    .flatMap((user) => user.friends)
    .filter((user, idx, array) => array.indexOf(user) === idx)
    .sort((a, b) => a.localeCompare(b));
};

// console.log(getSortedFriends(users));

// Задача 48/48 Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

const getTotalBalanceByGender = (users, gender) => {
  const newArr = users
    .filter(({ gender: userGender }) => userGender === gender)
    .map((user) => user.balance);
  return newArr.reduce((acc, value) => acc + value, 0);
};

console.log(getTotalBalanceByGender(users, "female"));

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

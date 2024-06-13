// из конспекта
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// // Якщо в об'єкті небагато властивостей, можна виконати деструктуризацію безпосередньо у місці оголошення змінної book.

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// Глибока деструктуризація
// Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи, що й в трьох попередніх вправах.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// Ще один плюс у тому, що можна деструктуризувати об'єкт в параметрі book. Це можна зробити в тілі функції.
// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі
// }

//Або відразу в сигнатурі (підписі) функції - немає різниці.

// function doStuffWithBook({
//   title,
//   numberOfPages,
//   downloads,
//   rating,
//   isPublic,
// }) {
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі
// }

//
// задача 1
// напиши скрипт для обьекта user
// добавляет поле mood со значением happy
// меняет значение hobby на skydiving
// меняет значение premium на false
// выводит содержание объекта user в формате ключ: значение используя object.keys
// и for of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// // добавляет поле mood со значением happy
// console.log(user);
// user.mood = "Happy";
// console.log(user);

// // меняет значение hobby на skydiving
// user.hobby = "skydiving";
// console.log(user);

// // меняет значение premium на false
// user["premium"] = false;
// console.log(user);

// // выводит содержание объекта user в формате ключ: значение используя object.keys
// // и for of

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.table(`${key} : ${user[key]}`);
// }

// задача 2 Object.values
// у нас есть обьект, где хранятся все зарплаты команды.
// напиши скприпт, который будет сумировать все зарплаты и сумировать их в переменную sum
// если обьект пустой результат будет 0

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// через object.values
// const values = Object.values(salaries);
// console.log(values); // теперь все значения свойст массив и мы его через for of можем перебрать

// let sum = 0;
// for (const value of values) {
//   sum += value;
// }
// console.log(sum);

// через for in (для обьектов) в этом примере мы не преобразовываем значения объектов в массив а работаем прямо со значением обращаясь к ним через []
// let sum = 0;
// for (const key in salaries) {
//   console.log(salaries[key]);
//   sum += salaries[key];
// }
// console.log(sum);

// задачка 3

// Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   {
//     name: "Смарагд",
//     price: 1300,
//     quantity: 4,
//   },
//   {
//     name: "Діамант",
//     price: 2700,
//     quantity: 3,
//   },
//   {
//     name: "Сапфір",
//     price: 400,
//     quantity: 7,
//   },
//   {
//     name: "Аквамарин",
//     price: 200,
//     quantity: 2,
//   },
// ];

// function calcTotalPrice(stones, stoneName) {
//   // for (let i = 0; i < stones.length; i += 1) {
//   //   console.log(stones[i]);
//   //   if()
//   // }

//   for (const stone of stones) {
//     // console.log(stone.name);
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return "empty";
// }

// console.log(calcTotalPrice(stones, "Смарагд"));

// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет-банку. Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій лише два.
 * Можна покласти чи зняти гроші з рахунку.
 * каждая транзакция это обьект со свойствами id,type, amount
 */

//тут список транзаций которые используются это положить и снять деньги
/* каждая транзакция это {объект}  со свойствами id,type, amount
 */

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// // заморозить изменения значений ключей можно так
// // Object.freeze(Transaction);
// // Transaction.DEPOSIT = "zhzhzfdfd";
// // console.log(Transaction);

// const account = {
//   // текущий баланс счета
//   balance: 0,
//   // а тут хранится история транзаций, объект со свойствами id,type, amount
//   transactions: [{ id: 16, amount: 150, type: "withdraw" }],

//   // метод, который создает и возвращает объект транзации
//   // принимает сумму и тип транзации
//   createTransaction(amount, type) {
//     return {
//       id: Date.now(),
//       amount,
//       type,
//     };
//   },

//   // метод, который отвечает за добавление суммы в балланс
//   // принимает сумму транзакции
//   // вызывает createTransaction для создания объекта трвнзакции
//   //  а после этого, добавляет его до истории транзации
//   deposit(amount) {
//     if (amount <= 0) {
//       return "Error"; //проверяем не пришла ли сумма отрицательная, это невозможная операция, поэтому пишем ошибку на первой итерации
//     }
//     const item = this.createTransaction(amount, Transaction.DEPOSIT); // будет добавляться результат вызова метода createTransaction
//     // console.log(item); // после того как мы получили результат транзации мы должны переложить его в историю транзакций
//     this.transactions.push(item);
//     this.balance += amount;
//   },
//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * Після чого додає його в історію транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount <= 0 || amount > this.balance) {
//       return "зняття такої суми не можливе, недостатньо коштів"; // лучше всего начинать с того, что обработаем все ошибки такие как например недостаточно денег на счету или введен 0 или число с минусом
//     }
//     const item = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.balance -= amount;
//     this.transactions.push(item);
//     // console.log(amount);
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзації по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (id === transaction.id) {
//         return transaction;
//       }
//     }
//     return "нет такого";
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         sum += transaction.amount;
//         // console.log("deposit");
//       }
//     }
//     return sum;
//   },
// };

// // console.log(account.createTransaction(1000, "deposit"));
// account.deposit(1000);
// account.deposit(50);
// account.withdraw(150);

// // console.log(account.withdraw(15000)); // проверка на сумму большую чем состояние баланса

// // console.log(account.deposit(0));
// // console.log(account);
// // console.log(account.getBalance());
// // console.log(account.getTransactionDetails(16));
// // console.log(account.getTransactionDetails(17)); // ложное значение if
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
//
//
//
// модуль 3 часть 2
// ..
//
// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };
// console.log(firstBook);

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480", // это стоит по умолчанию если в родительском объекте нет значения
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// // console.log(title); // мы эту переменную переназвали на firstTitle поэтому ее не существует
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смішної людини",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

//
//
// а теперь задания
//  Task 1 (Деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

/**
 * js docs
 * высчитываем индекс массы тела человека
 * @param {object} obj
 * @returns {Number} BMI
 */

// function calcBMI({ height, weight }) {
//   //мы распыляем объект чтобы можно было использовать данные внутри объекта
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1)); // Math.pow(numericHeight,2 )
// }

// console.log(calcBMI({ weight: "68,3", height: "1.65" })); // 25.1

// console.log(calcBMI({ weight: "118,3", height: "1.95" })); //31.1
//
//  Task 2 (Деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
//

// //
// /**
//  *
//  * @param {Object} obj
//  */
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   // console.log(names);
//   const phoneList = phones.split(",");
//   // console.log(phones);

//   for (let i = 0; i < nameList.length, i < phoneList.length; i += 1) {
//     console.log(`${nameList[i]} - ${phoneList[i]}`);
//   }
// }

// console.log(
//   printContactsInfo({
//     names: "Jacob,Maria,Ruben,Aleksandr",
//     phones: "14718960932,12507914080,16281820195,11948218654",
//   })
// );

//  Task 3 (Глибока деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
// function getBotReport({ companyName, repairBots, defenceBots }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(
//   getBotReport({ companyName: "Systems", repairBots: 150, defenceBots: 50 })
// );

// Task 4 (Деструктуризація)
// Напишу функцію щоб вона приймала об'єкт параметрів із властивостями companyName і stock і виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport({ companyName, stock: { repairBots, defenceBots } }) {
//   let total = repairBots + defenceBots;
//   // for (const value of Object.values(stock)) {
//   //   total += value;
//   // } // используем for of когда названия ключей могут быть разные
//   // и деструктуризацию когда они одинаковые
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: "Cynerdyne Systems",
//     stock: { repairBots: 150, defenceBots: 50 },
//   })
// );

// console.log(
//   getStockReport({
//     companyName: "Belacci",
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

// Task 5 (spread)
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданою властивістю id, а також list зі значенням "default" якщо у partialContact немає такої властивості.
//
// function createContact(partialContact) {
//   return {
//     id: generateId(),
//     createdAt: new Date(),
//     list: "default", // все зависит от того, где находится ключ который создается, если он вверху тогда list значение default по умолчанию, только когда нет такого значения в объекте который передается
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({ name: "Mango", email: "mango@mail.com", list: "friends" })
// );

// console.log(createContact({ name: "Poly", email: "poly@mail.com" }));

// function generateId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
// }

// Task 6 (rest)
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...props }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...props,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "mercer@mail.com",
//     friends: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "cross@mail.com",
//     friends: 20,
//   })
// );

// вернуть нам должно все тоже самое только вместо firstName и lastName = fullName

// автопроверка
// 10. Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

//11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   // Change code above this line
// }

// 12 ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }
//
// 13 Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
//

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//   values.push(apartment[key]);
// }

// 14 ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ 2.0
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps(apartment));

// 16 ЗАДАЧА. РАСХОДЫ НА ЗАРПЛАТУ
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary(salaries));

// 17 Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);

//   // const hex = Object.values(color);
// }
// console.log(hexColors);
// console.log(rgbColors);

//18 ЗАДАЧА. ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВА
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// console.log(getProductPrice("Grip"));

// 19 ЗАДАЧА. КОЛЛЕКЦИЯ ЗНАЧЕНИЙ СВОЙСТВА
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
// Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
// Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
// Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const arr = [];
//   // Change code below this line
//   for (const product of products) {
//     const keys = Object.keys(product);
//     // const values = Object.values(product);
//     for (const key of keys) {
//       if (key === propName) {
//         arr.push(product[key]);
//       }
//     }
//   }
//   return arr;
//   // Change code above this line
// }

// console.log(getAllPropValues("c"));

// 20 ЗАДАЧА. ОБЩАЯ СТОИМОСТЬ ТОВАРА
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.
// Вызов calculateTotalPrice("Blaster") возвращает 0
// Вызов calculateTotalPrice("Radar") возвращает 5200
// Вызов calculateTotalPrice("Droid") возвращает 2800

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let total = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//       total = product.price * product.quantity;
//       return total;
//     }
//   }
//   return total;

//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Droid"));

// 21 Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// // Деструктуризируем
// const { title, author, public, rating, coverImage } = book;
// console.log(coverImage); // undefined

//22 В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 23 Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", // странно я же ее не объявляла... зачем мне ее переименовывать
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 24 Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);

//25 Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(today);

//26 Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.
// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({
//     today: { low: 10, high: 20 },
//     tomorrow: { low: 20, high: 30 },
//   })
// );

// 27 В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// 30 ЗАДАЧА. КАРТОЧКИ ЗАДАЧ
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// Вызов makeTask({}) возвращает { category: "General", priority: "Normal", completed: false }

// Вызов makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const newObject = { completed, category, priority };
//   // Change code above this line
//   return { ...newObject, ...data };
// }

// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );

// 31 Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
//Вызов add(15, 27) возвращает 42
// Вызов add(12, 4, 11, 48) возвращает 75
//
// Change code below this line
// function add(...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;

//   // Change code above this line
// }

// console.log(add(15, 27));

//

// Задача 32/41
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

// Вызов addOverNum(50, 15, 27) возвращает 0
// Вызов addOverNum(10, 12, 4, 11, 48, 10, 8) возвращает 71
// Вызов addOverNum(15, 32, 6, 13, 19, 8) возвращает 51
// Вызов addOverNum(20, 74, 11, 62, 46, 12, 36) возвращает 218

// Change code below this line
// function addOverNum(num, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > num) {
//       total += arg;
//     }
//   }
//   return total;

//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// 33 ЗАДАЧА. МАССИВ СОВПАДЕНИЙ
// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.
// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.
// Вызов findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) возвращает [1, 2]
// Вызов findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) возвращает [17, 89, 2]
// Вызов findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) возвращает [24, 9, 41]
// Вызов findMatches([63, 11, 8, 29], 4, 7, 16) возвращает []

// Change code below this line
// function findMatches(arr, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (arr.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// 34 Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// // Вызов метода bookShelf.updateBook("Sands of dune", "Dune") возвращает строку "Updating book Sands of dune to Dune"
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// 35/41 Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

// После вызова метода bookShelf.updateBook("Haze", "Dungeon chronicles"), значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// После вызова метода bookShelf.updateBook("The last kingdom", "Dune"), значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     for (const book of this.books) {
//       if (book === oldName) {
//         this.books.splice(this.books.indexOf(book), 1, newName);
//       }
//     }
//     // Change code above this line
//   },
// };

// // console.log(bookShelf.updateBook("The last kingdom", "Dune"));
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// ЗАДАЧА. ЛАВКА ЗЕЛИЙ «У СТАРОЙ ЖАБЫ»
// К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

// const atTheOldToad = {
//   // Change code below this line
//   potions: [],
//   // Change code above this line
// };

// 37 ЗАДАЧА. ПОЛУЧАЕМ ВСЕ ЗЕЛЬЯ
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());

//ЗАДАЧА: ДОБАВЛЯЕМ НОВОЕ ЗЕЛЬЕ
//Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.addPotion("Power potion"));

// ЗАДАЧА. УДАЛЯЕМ ЗЕЛЬЕ
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     // this.potions.splice(potionName, 1);
//     for (const potion of this.potions) {
//       if (potionName === potion) {
//         // console.log(potion);
//         const idx = this.potions.indexOf(potion);
//         this.potions.splice(idx, 1);
//       }
//     }
//     // Change code above this line
//     return this.potions;
//   },
// };

// // После первого вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив ["Speed potion", Stone skin"]
// // После второго вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив ["Stone skin"]

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));

//40 ЗАДАЧА: ОБНОВЛЯЕМ ЗЕЛЬЕ
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// После первого вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]

// После второго вызова метода atTheOldToad.updatePotionName("Stone skin", "Invisibility"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Invisibility"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     for (const potion of this.potions) {
//       if (potion === oldName) {
//         const idx = this.potions.indexOf(potion);
//         console.log(idx);
//         this.potions.splice(idx, 1, newName);
//       }
//     }
//     return this.potions;
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

// 41 ЗАДАЧА: РАСШИРЯЕМ ИНВЕНТАРЬ
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion({ name, price }) {
    for (const potions of this.potions) {
      if (name === potions.name) {
        return `Error! Potion ${name} is already in your inventory!`;
      }
    }
    return this.potions.push({ name, price });
  },
  removePotion(potionName) {
    for (const potion of this.potions) {
      const idx = this.potions.indexOf(potion);
      if (potionName === potion.name) {
        this.potions.splice(idx, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      const idx = this.potions.indexOf(potion);
      if (oldName === potion.name) {
        console.log((potion.name = newName));
      }
    }
  },
  // Change code above this line
};

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 620 }));
// console.log(atTheOldToad);

// Для исходного объекта после вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Invisibility"));

// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

// console.log(
//   atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// );
console.log(
  atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
);
console.log(atTheOldToad.potions);

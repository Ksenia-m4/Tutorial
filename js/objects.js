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

// Глибока деструктуризація​
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

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

const account = {
  // текущий баланс
  balance: 0,
  // история транзаций
  transaction: [],

  // метод создает и возвращает объект транзации. принимает сумму и тип транзакции.
  createTransaction(amount, type) {
    return {
      id: Date.now(),
      type,
      amount,
    };
  },

  //  метод который отвечает за добавление суммы в балланс
  // принимает сумму транзакции. Вызывает createTransaction для создания обьекта транзации
  // после чего добавляет его в историю транзакции
  deposit(amount) {},

  //
};

console.log(account.createTransaction(1000, "deposit"));

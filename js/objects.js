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

//тут список транзаций которые используются это положить и снять деньги
/* каждая транзакция это {объект}  со свойствами id,type, amount
 */

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

// заморозить изменения значений ключей можно так
// Object.freeze(Transaction);
// Transaction.DEPOSIT = "zhzhzfdfd";
// console.log(Transaction);

const account = {
  // текущий баланс счета
  balance: 0,
  // а тут хранится история транзаций, объект со свойствами id,type, amount
  transactions: [{ id: 16, amount: 150, type: "withdraw" }],

  // метод, который создает и возвращает объект транзации
  // принимает сумму и тип транзации
  createTransaction(amount, type) {
    return {
      id: Date.now(),
      amount,
      type,
    };
  },

  // метод, который отвечает за добавление суммы в балланс
  // принимает сумму транзакции
  // вызывает createTransaction для создания объекта трвнзакции
  //  а после этого, добавляет его до истории транзации
  deposit(amount) {
    if (amount <= 0) {
      return "Error"; //проверяем не пришла ли сумма отрицательная, это невозможная операция, поэтому пишем ошибку на первой итерации
    }
    const item = this.createTransaction(amount, Transaction.DEPOSIT); // будет добавляться результат вызова метода createTransaction
    // console.log(item); // после того как мы получили результат транзации мы должны переложить его в историю транзакций
    this.transactions.push(item);
    this.balance += amount;
  },
  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * Після чого додає його в історію транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "зняття такої суми не можливе, недостатньо коштів"; // лучше всего начинать с того, что обработаем все ошибки такие как например недостаточно денег на счету или введен 0 или число с минусом
    }
    const item = this.createTransaction(amount, Transaction.WITHDRAW);
    this.balance -= amount;
    this.transactions.push(item);
    // console.log(amount);
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзації по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }
    return "нет такого";
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
        // console.log("deposit");
      }
    }
    return sum;
  },
};

// console.log(account.createTransaction(1000, "deposit"));
account.deposit(1000);
account.deposit(50);
account.withdraw(150);

// console.log(account.withdraw(15000)); // проверка на сумму большую чем состояние баланса

// console.log(account.deposit(0));
// console.log(account);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(16));
// console.log(account.getTransactionDetails(17)); // ложное значение if
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

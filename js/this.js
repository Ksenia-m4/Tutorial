// модуль 5 this
// 1 правило

const petya = {
  username: "Petya",
  showName() {
    console.log(petya.username);
  },
};

// petya.showName();
// функция showName вызвана в конексте обьекта petya

// 2 правило. если эту функцию никто не вызывает, справа нет обьекта

function foo() {
  console.log(this);
}

// foo();
//эту функцию никто не вызывает - в строгом - underfind, в не строгом - window

//
function showThis() {
  console.log("this in showThis: ", this);
}

const user = {
  username: "Mango",
};

user.showContext = showThis;
// user.showContext();

// здесь нет скобок, поэтому в свойства переменнной user записывается не результат этой фн, а ссылка на саму фн

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return console.log(`${this.firstName} ${this.lastName}`);
  },
};

// customer.getFullName();

const outerShowTag = customer.getFullName;
// outerShowTag() - будет underfind
// customer.outerShowTag() - user.outerShowTag is not a fn в обьекте customer нет и не появилась эта функция поэтому здесь будет ошибка

// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю із властивості stones.

const chopShop = {
  stones: [
    {
      name: "Emerald",
      price: 1300,
      quantity: 4,
    },
    {
      name: "Diamond",
      price: 2700,
      quantity: 3,
    },
    {
      name: "Sapphire",
      price: 1400,
      quantity: 7,
    },
    {
      name: "Ruby",
      price: 800,
      quantity: 2,
    },
  ],
  // calcTotalPrice(stoneName) { //так мы делали до методов перебора
  //   for (const { name, price, quantity } of this.stones) {
  //     if (name === stoneName) {
  //       return price * quantity;
  //     }
  //   }
  //   return "Error";
  // },
  calcTotalPrice(stoneName) {
    const { price, quantity } = this.stones.find(
      (item) => item.name === stoneName
    );
    return price * quantity;
  },
};
// console.log(chopShop.calcTotalPrice("Diamond"));

// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкта phonebook щоб код запрацював.
// Доробити виклик функції this.generateId щоб після call this не втрачався

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts;
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );

// Example 3 - Калькулятор
// Створіть об'єкт calculator із трьома методами:

// create(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

const calculator = {
  create(a, b) {
    (this.a = a), (this.b = b);
  },
  add() {
    // return (this.a || 0) + (this.b || 0); // если метод add в коде выше чем create с помощью || мы определяем дефолтное занчение (или true последнее значение)
    return (this.a ?? 0) + (this.b ?? 0); // но лучше ?? - опрератор нулевого соединения, который работает с null и underfind
  },
  mult() {
    return (this.a ?? 1) * (this.b ?? 1);
  },
};

// calculator.create(100, 5);
// calculator.create(100);
// calculator.create(3);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());
// const calc2 = {};
// calculator.create.call(calc2, 2, 5);
// console.log(calc2);
// console.log(calculator.mult(5, 5));

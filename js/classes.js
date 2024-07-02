// const Car = function (value) {
//   // 2 фн вызывается в контексте созданного обьекта, т.е this записывается ссылка на него
//   // console.log(this);

//   this.a = value;
//   // 4 ссылка на обьект возвращается в место вызова new Car
//   // 3 в свойстве this.__proto__ записывается ссылка на обьект Car.prototype, т.е Car.prototype - прототип будущего обьекта
// };

// // console.log(Car.prototype);
// Car.prototype.sayHi = function () {
//   // console.log(`sayHi`, this);
// };
// // 1 если фн вызывается через new  создается пустой объект
// const myCar = new Car(5); // п.2 this объекта это this fn выше (Car)
// // new Car(5) - это ВЫЗОВ функции с оператором new
// // myCar.sayHi();

// Car.logInfo = function (object) {
//   // console.log(object);
// }; // это свойство не будет доступно на экземплярах

// console.dir(Car);

// Example 1 - Блоггер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем, на яких спеціалізується блогер
// Клас очікує один параметр – об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який повертає рядок: User ${пошта} is ${вік} years old and has ${у постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

class Blogger {
  constructor({ name, age, numberOfPosts, topics = [] } = {}) {
    this.email = name;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const mango1 = new Blogger({
  name: "mango@mail.com",
  age: 24,
  numberOfPosts: 20,
  topics: ["tech", "cooking"],
});

// console.log(mango);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   name: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });
// console.log(poly);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// Example 2 - Сховище
// Напиши клас Storage, який створює об'єкти для управління складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.

// Додай методи класу:

// getItems() – повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     if (!this.items.includes(item)) {
//       items.push(item);
//       return;
//     }
//     return "Такой товар уже есть";
//   }
//   removeItem(item) {
//     const idx = this.items.indexOf(item);
//     console.log(idx);
//     if (!!~idx) {
//       this.items.splice(idx, 1);
//     }
//   }
// }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
// -(-1+1) = -0 // false
// -(0+1) = -1 // true
// !! => это мы приводим значение к булю === Boolean()

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);
// console.log(storage);
// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem("🍌");
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.addItem("🍎");
// console.table(storage.items);
// console.log(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
// storage.removeItem("🍎");
// console.log(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через геттер та сеттер login та email.

class User1 {
  #login;
  #email;

  constructor({ login, email } = {}) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
}

// const mango = new User1({
//   login: "Mango",
//   email: "mango@dog.woof",
// });
// console.log(mango);

// mango.login = "asvasdadasd";
// console.log(mango);

// console.log(mango.login); // Mango
// mango.login = "Mangodoge";
// console.log(mango);
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// console.log(poly.login); // Poly
// poly.login = "Polycutie";
// console.log(poly.login); // Polycutie

// Example 4 - Нотатки
// Напиши клас Notes, який управляє колекцією нотаток у властивості items. Нотатка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якій зберігатиметься об'єкт із пріоритетами.

// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

class Notes {
  static Priority = {
    LOW: "low",
    NORMAL: "normal",
    HIGH: "high",
  };
  constructor(note) {
    this.items = note;
  }
  addNote(note) {
    // if (!this.items.includes(note)) { // не работает с сложным типом данных, а у нас массив обьектов
    //   this.items.push(note);
    // }
    const inArr = this.items.some(({ text }) => text === note.text);
    if (!inArr) {
      this.items.push(note);
    }
  }

  removeNote(text) {
    const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
    if (!!~idx) {
      this.items.splice(idx, 1);
    }
  }

  updateNote(text, newPriority) {
    const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
    console.log(idx);
    if (!!~idx) {
      this.items[idx].priority = newPriority;
    }
  }
}

// const myNotes = new Notes([]);

// myNotes.addNote({
//   text: "Моя перша нотатка",
//   priority: Notes.Priority.LOW,
// });
// myNotes.addNote({
//   text: "Моя друга нотатка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: "Моя друга нотатка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote("Моя друга нотатка");
// console.log(myNotes.items);

// myNotes.updateNote("Моя друга нотатка", Notes.Priority.HIGH);
// console.log(myNotes.items);

// Example 5 - Toggle
// Напишіть клас Toggle, який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За зомовчуванням значення властивості on має бути false.

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};

// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));

// Задача 2/20
// Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.

// После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Объявлена переменная customer
// Значение переменной customer это объект со свойствами и методами
// Вызов customer.getDiscount() возвращает текущее значение свойства discount
// Вызов customer.setDiscount(0.15) обновляет значение свойства discount
// Вызов customer.get Balance() возвращает текущее значение свойства balance.
// Вызов customer.getOrders() возвращает текущее значение свойства orders
// Вызов customer.addOrder(5000, "Steak") добавляет "Steak" в массив значений свойства orders и обновляет баланс
// Метод getBalance объекта customer использует this
// Метод getDiscount объекта customer использует this
// Метод setDiscount объекта customer использует this
// Метод getOrders объекта customer использует this
// Метод addOrder объекта customer использует this

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map((order) => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map((order) => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter((order) => order.email === email);
  },
  // Change code above this line
};

// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));
// Вызов historyService.getOrdersLog() возвращает строку с перечислением данных всех заказов из свойства orders
// Вызов historyService.getEmails() возвращает массив всех уникальных почтовых адресов из свойства orders
// Вызов historyService.getOrdersByEmail("solomon@topmail.net") возвращает [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// Вызов historyService.getOrdersByEmail("artemis@coldmail.net") возвращает [{ email: "artemis@coldmail.net", dish: "Pizza" }]

// Задача 10/20
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. Класс ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Объяви следующие методы класса:

// getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта который вызывает этот метод.
// removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве items объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    if (!this.items.includes(newItem)) {
      this.items.push(newItem);
      return;
    }
    return;
  }
  removeItem(itemToRemove) {
    const idx = this.items.indexOf(itemToRemove);
    if (!!~idx) {
      this.items.splice(idx, 1);
      return;
    }
    return;
  }
}

// Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     if (!this.items.includes(item)) {
//       items.push(item);
//       return;
//     }
//     return "Такой товар уже есть";
//   }
//   removeItem(item) {
//     const idx = this.items.indexOf(item);
//     console.log(idx);
//     if (!!~idx) {
//       this.items.splice(idx, 1);
//     }
//   }
// }

// Задача 11/20
// Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

// Объяви следующие методы класса:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает параметр str (строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
// padStart(str) - получает параметр str (строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
// padBoth(str) - получает параметр str (строку) и добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    return (this.value += str);
  }
  padStart(str) {
    this.value = str + this.value;
  }
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   // Change code below this line
//   #price;
//   static MAX_PRICE = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//     return;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return "Error! Price exceeds the maximum";
    }
    return "Success! Price is within acceptable limits";
  }
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// Задача 19/20
// Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.

// Чтобы показать как будет использоваться класс Admin мы добавили инициализацию экземпляра под объявлением класса.
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// Задача 20/20
//Добавь классу Admin следующие свойства и методы.
// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.

// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.

// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.

// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
//
//
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line
  blacklistedEmails = [];

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']

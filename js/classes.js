const Car = function (value) {
  // 2 фн вызывается в контексте созданного обьекта, т.е this записывается ссылка на него
  // console.log(this);

  this.a = value;
  // 4 ссылка на обьект возвращается в место вызова new Car
  // 3 в свойстве this.__proto__ записывается ссылка на обьект Car.prototype, т.е Car.prototype - прототип будущего обьекта
};

// console.log(Car.prototype);
Car.prototype.sayHi = function () {
  // console.log(`sayHi`, this);
};
// 1 если фн вызывается через new  создается пустой объект
const myCar = new Car(5); // п.2 this объекта это this fn выше (Car)
// new Car(5) - это ВЫЗОВ функции с оператором new
// myCar.sayHi();

Car.logInfo = function (object) {
  // console.log(object);
}; // это свойство не будет доступно на экземплярах

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

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    if (!this.items.includes(item)) {
      items.push(item);
      return;
    }
    return "Такой товар уже есть";
  }
  removeItem(item) {
    const idx = this.items.indexOf(item);
    console.log(idx);
    if (!!~idx) {
      this.items.splice(idx, 1);
    }
  }
}
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

class User {
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

const mango = new User({
  login: "Mango",
  email: "mango@dog.woof",
});
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

const myNotes = new Notes([]);

myNotes.addNote({
  text: "Моя перша нотатка",
  priority: Notes.Priority.LOW,
});
myNotes.addNote({
  text: "Моя друга нотатка",
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.addNote({
  text: "Моя друга нотатка",
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

// myNotes.removeNote("Моя друга нотатка");
// console.log(myNotes.items);

// myNotes.updateNote("Моя друга нотатка", Notes.Priority.HIGH);
// console.log(myNotes.items);

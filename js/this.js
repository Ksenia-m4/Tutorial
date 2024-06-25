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

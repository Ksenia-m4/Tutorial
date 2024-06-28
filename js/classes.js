const Car = function (value) {
  // 2 фн вызывается в контексте созданного обьекта, т.е this записывается ссылка на него
  console.log(this);

  this.a = value;
  // 4 ссылка на обьект возвращается в место вызова new Car
  // 3 в свойстве this.__proto__ записывается ссылка на обьект Car.prototype, т.е Car.prototype - прототип будущего обьекта
};

console.log(Car.prototype);
Car.prototype.sayHi = function () {
  console.log(`sayHi`, this);
};
// 1 если фн вызывается через new  создается пустой объект
const myCar = new Car(5); // п.2 this объекта это this fn выше (Car)
// new Car(5) - это ВЫЗОВ функции с оператором new
// myCar.sayHi();

Car.logInfo = function (object) {
  console.log(object);
}; // это свойство не будет доступно на экземплярах

console.dir(Car);

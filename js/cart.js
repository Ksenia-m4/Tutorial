/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    // просто возвращает ссылку на массив продуктов
    return this.items;
  },
  add(product) {
    // вначале проверяем есть ли этот товар в корзине, для этого перебираем массив
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    // либо так

    // const { items } = this;
    // for (const item of items) {
    //   const { name } = item;
    //   if (name === product.name) {
    //     item.quantity += 1;
    //     return; // тут обязательно надо выйти из функции иначе выполнится код, который ниже и в итоге получится что мы дублируем товар
    //   }
    // }

    // добавляем в обьект новое свойство колл-во
    const newProduct = {
      ...product, // распылили все свойства, которые передали
      quantity: 1, // добавили сво-во quantity
    };

    // добавляем товар в корзину
    this.items.push(newProduct);
  },

  remove(productName) {
    // а здесь мы должны удалить товар
    const { items } = this; // деструктуризация this, чтобы не писать this.items.length
    for (let i = 0; i < items.length; i += 1) {
      //   console.log(this.items[i]);
      const { name } = items[i]; // деструктуризация name

      if (productName === name) {
        // console.log("такой есть", productName); // нашли продукт и его удаляем
        items.splice(i, 1);
        return;
      }
    }
  },
  clear() {
    // удаляет все товары из корзины
    this.items = [];
  },

  countTotalPrice() {
    // считаем общее кол-во товаров
    let total = 0;
    const { items } = this;
    for (const item of items) {
      const { price, quantity } = item; //из этого обьекта нам нужна только цена и цена, поэтому можно деструктуризировать их вместе
      total += price * quantity;
    }
    return total;
  },
  // самостоятельно
  increaseQuantity(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      //   console.log(productName);
      //   console.log(items[i].name);

      const { name, quantity } = items[i]; //
      if (name === productName) {
        // console.log("такой есть");
        items[i].quantity += 1; // если нашли - увеличиваем на 1 единицу
      }
    }
  },

  decreaseQuantity(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name, quantity } = items[i];

      if (name === productName) {
        items[i].quantity -= 1;
      }
    }
  },
};

// console.log(cart.getItems()); // тут мы просто возвращаем то, что есть в корзине ( пока что она пустая поэтому отображается пустой массив)

// добавляем товар в корзину
cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });

console.table(cart.getItems()); /// видим что добавили первый продукт

cart.remove("🍎");
console.table(cart.getItems()); // тут удаляем товар из корзины

// cart.clear();
// console.log(cart.getItems()); //удалили все продукты из корзины

console.table("Total:", cart.countTotalPrice());

cart.increaseQuantity("🍓");
cart.increaseQuantity("🍎");
console.table(cart.getItems());

cart.decreaseQuantity("🍋");
console.table(cart.getItems());

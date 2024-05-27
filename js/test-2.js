// напиши скрипт поиска самого маленького числа в массиве, при условии, что числа уникальные и не повторяются.

const numbers = [42, 5, 10, 22, 102, 3];
let smallestNunber = numbers[0];

// 1-переменные
// 2-перебрать все переменные
// 3-утверждаем что первое число самое маленькое
// 4-сравниваем с остальными и перезаписываем минимальное число

for (let i = 0; i < numbers.length; i += 1) {
  const number = numbers[i];
  //   console.log(number);
  if (number < smallestNunber) {
    smallestNunber = number;
  }
continue;?
}

for (const number of numbers) {
  if (number < smallestNunber) {
    smallestNunber = number;
  }
}

console.log(smallestNunber);

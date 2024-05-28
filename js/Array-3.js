// 1) напиши скрипт, который обьединяет все элементы массива в одно строковое значение
// элементов произвольное колличество

join
const friends = ["Mango", "Poly", "Ajax", "Kiwi"];
const string = friends.join(", ");

console.log(string);

// 2) Напиши скрипт, который заменяет регистр каждого символа в строке на противоположный
// например JavaScript на jAVAsKRIPT
// toLowerCase()toUpperCase()??

const string = "JavaScript";
const letters = string.split("");
let invertedString = "";

for
for (const letter of letters) {
  //   console.log(letter);
  if (letter === letter.toLowerCase()) {
    // letter.toUpperCase();
    // console.log("эта буква в нижнем регистре", letter);
    invertedString += letter.toUpperCase();
  } else {
    invertedString += letter.toLowerCase();
  }
}
console.log(invertedString);

// тернарный оператор
for (const letter of letters) {
  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}
console.log(invertedString);

// 3)  делаем slug из названии статьи
// заголовок статьи состоит из слов и пробелов

// привести к нижнему регистру

const title = "Top 10 benefits of React framework";
const normalizedTitle = title.toLowerCase();

const words = normalizedTitle.split(" ");

const slug = words.join("-");
console.log(slug);

// но лучше исполькозать чейнинг

const slugUpper = title.toLowerCase().split(" ").join("-");
console.log(slugUpper);
let url = "";
let words = "";

words = normalizedTitle.split(" ");
for (const word of words) {
  console.log(words.join("-"));
}

// 4) скрипт, который считает сумму двух массивов

const array1 = [5, 8, 4, 2];
const array2 = [3, 1];
let total = 0;

const totalArray = array1.concat(array2);
console.table(totalArray);

for (const element of totalArray) {
  total += element;
}

console.log(total);

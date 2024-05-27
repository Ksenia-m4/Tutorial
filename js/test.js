// сложить все четные числа
const numbers = [1, 2, 5, 10];
let total = 0;

for (const number of numbers) {
  if (!(number % 2)) {
    // console.log("четное");
    total += number;
  }
}

console.log(total);
const logins = ["mango", "poly1", "ajax", "kiwi"];
const loginToFind = "poly";
let message = `Логин ${loginToFind} не найден`;

// 1
if (logins.includes(loginToFind)) {
  console.log(`твой логин ${loginToFind} существует`);
} else console.log(`Логин ${loginToFind} не найден`);

// 2
for (let i = 0; i < logins.length; i += 1) {
  const login = logins[i];

  if (login === loginToFind) {
    message = `логин ${loginToFind} существует`;
    break;
  }
  message = `Логин ${loginToFind} не найден`;
}

console.log(message);

// 3
for (const login of logins) {
  if (login === loginToFind) {
    message = `логин ${loginToFind} существует`;
    break;
  }
}
console.log(message);

// 4

const logins = ["mango", "poly", "ajax", "kiwi"];
const loginToFind = "poly";

console.log(
  logins.includes(loginToFind)
    ? `логин ${loginToFind} существует`
    : `Логин ${loginToFind} не найден`
);

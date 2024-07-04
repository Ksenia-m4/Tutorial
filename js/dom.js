const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');
// ищи в классе editor кнопку с атрибутами data-action свойство значение которого то, что в квадратных скобках, в ковычках

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const heading = document.createElement("h1");

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image);

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

const currentLink = "/blog";
const linkEl = document.querySelector(`.link[href="${currentLink}"]`); // найди в документе класс link у котого href будет соответсвовать currentLink
console.log(linkEl);

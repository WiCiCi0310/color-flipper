const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const colorEl = document.getElementById("color");
const body = document.body;
const buttonEl = document.getElementById("btn");

function getRandomNum() {
  return Math.floor(Math.random() * hex.length);
}

buttonEl.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNum()];
  }
  body.style.background = hexColor;
  colorEl.textContent = hexColor;
});

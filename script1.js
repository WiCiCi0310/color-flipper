const colors = ["red", "green", "blue", "rgb(12,54,126)", "#123123"];
const colorEl = document.getElementById("color");
const body = document.body;
const buttonEl = document.getElementById("btn");

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}

buttonEl.addEventListener("click", function () {
  let tempColor = colors[getRandomNum()];
  body.style.background = tempColor;
  colorEl.textContent = tempColor;
});

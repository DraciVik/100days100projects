const button = document.querySelector("#change");
const p = document.querySelector("#current-color");

const body = document.body;

button.addEventListener("click", changeBackground);

function changeBackground() {
  let color1 = Math.floor(Math.random() * 255);
  let color2 = Math.floor(Math.random() * 255);
  let color3 = Math.floor(Math.random() * 255);
  let randomColor = `rgb(${color1}, ${color2}, ${color3})`;
  body.style.background = randomColor;
  p.textContent = randomColor;
}

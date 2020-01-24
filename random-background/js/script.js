const button = document.querySelector("#change");
const p = document.querySelector("#current-color");

const body = document.body;

button.addEventListener("click", changeBackground);

function changeBackground() {
  let color11 = Math.floor(Math.random() * 255);
  let color12 = Math.floor(Math.random() * 255);
  let color13 = Math.floor(Math.random() * 255);

  let degree = Math.floor(Math.random() * 90);

  let opacity1 = Math.round(Math.random() * 100) / 100;
  let opacity2 = Math.round(Math.random() * 100) / 100;

  let color21 = Math.floor(Math.random() * 255);
  let color22 = Math.floor(Math.random() * 255);
  let color23 = Math.floor(Math.random() * 255);

  let randomColor = `linear-gradient(${degree}deg, rgba(${color11}, ${color12}, ${color13},${opacity1}) 0%, rgba(${color21}, ${color22}, ${color23}, ${opacity2}) 100%)`;

  body.style.background = randomColor;
  p.textContent = randomColor;
}

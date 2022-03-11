const redButton = document.getElementById("redBtn");
const blueButton = document.getElementById("blueBtn");
const greenButton = document.getElementById("greenBtn");

const redDiv = document.getElementById("red");
const blueDiv = document.getElementById("blue");
const greenDiv = document.getElementById("green");

// worng work
// redDiv.addEventListener("click", colourRed);

// function colourRed() {
//   redDiv.style.background = "red";
// }

function colourIt(e) {
  e.preventDefault();
}
function redButtonFunc(e) {
  e.preventDefault;

  redDiv.style.background = "rgba(174, 23, 23, 0.5)";
}
function blueButtonFunc(e) {
  e.preventDefault;

  blueDiv.style.background = "rgba(23, 53, 174, 0.5)";
}
function greenButtonFunc(e) {
  e.preventDefault;

  greenDiv.style.background = "rgba(27, 169, 27, 0.5)";
}

function removeAll(e) {
  e.preventDefault();
  redDiv.style.background = "";
  blueDiv.style.background = "";
  greenDiv.style.background = "";
}

function removeRedFunc(e) {
  e.preventDefault();
  redDiv.style.background = "";
}
function removeBlueFunc(e) {
  e.preventDefault();
  blueDiv.style.background = "";
}
function removeGreenFunc(e) {
  e.preventDefault();
  greenDiv.style.background = "";
}

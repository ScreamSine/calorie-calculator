const userDataValue = document.querySelectorAll(".entervalue");
const calcButton = document.querySelector(".calculate");
const allClear = document.querySelector(".allClear");
const paragraph = document.querySelector(".testing");

userDataValue.forEach((div) => {
  calcButton.addEventListener("click", function () {
    paragraph.innerHTML =
      parseInt(userDataValue[0].value) +
      parseInt(userDataValue[1].value) +
      parseInt(userDataValue[2].value);
  });
});

allClear.addEventListener("click", function () {
  paragraph.innerHTML = "";
});

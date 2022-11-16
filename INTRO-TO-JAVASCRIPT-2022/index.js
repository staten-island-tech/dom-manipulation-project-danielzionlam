const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelector(".point"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.textContent = "This is now a bigger red box ";
  text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});

function changeLi() {
  DOMSelectors.points.forEach((point) => {
    point.addEventListener("click", function () {
      point.innerHTML("Hello");
    });
  });
}
changeLi();

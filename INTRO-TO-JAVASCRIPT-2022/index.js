const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector("#input"),
};
const cat = "meow";
DOMSelectors.box.insertAdjacentHTML("beforebegin", "<h1>We are an </h1>");

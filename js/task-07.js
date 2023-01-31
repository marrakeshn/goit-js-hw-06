const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", fs1);
function fs1(e) {
  text.style.fontSize = `${e.target.value}px`;
}
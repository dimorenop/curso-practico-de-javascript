const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

h1.innerHTML = "patito <br> Feo";
h1.innerText = "patito <br> Feo";
// console.log(h1.getAttribute("class"))
// h1.setAttribute("class", "rojo")
h1.classList.add("rojo");
h1.classList.remove("verde");
// h1.classList.toggle("verde");
// h1.classList.contains("verde");

input.placeholder = "hola";

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://johnpapa.gallerycdn.vsassets.io/extensions/johnpapa/vscode-peacock/4.2.2/1663810940966/Microsoft.VisualStudio.Services.Icons.Default"
);

pid.innerHTML = "";
pid.append(img);

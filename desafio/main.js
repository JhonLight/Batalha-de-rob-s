/* const ex = document.querySelector("#calcular");

ex.addEventListener("click", (event) => {
  console.log("eu fui clicado");
  console.log(event);
  addH1();
});

const res = document.querySelector(".resultado");

function addH1() {
  res.innerHTML = "fui clicado";
}
 */

/* const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
  resultado.innerHTML = "Fui clicado";
});
 */

/* const botao = document.querySelector("#calcular");
const resultado = document.querySelectorAll(".resultado");

botao.addEventListener("click", () => {
  for (let i = 0; i < resultado.length; i++) {
    resultado[i].innerHTML = "fui clicado";
  }
}); */

/* document.querySelector("#calcular").addEventListener("click", () => {
  let tal = document.querySelectorAll(".resultado");

  for (let i = 0; i < tal.length; i++) {
    tal[i].innerHTML = "fui clicado";
    console.log("1");
  }
});

/* document.querySelector("#calcular").addEventListener("click", () => {
  let resultado = document.querySelectorAll(".resultado");

  for (let i = 0; i < resultado.length; i++) {
    resultado[i].innerHTML = "fui clicado";
  }
}); */

/* var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"];
 */
/* 
let d = document.querySelector(".lista");
let d_filho = document.querySelectorAll(".item");

const muri = document.querySelector("[data-botao]");

muri.addEventListener("click", () => {});

d_filho.forEach(() => {
  d.removeChild(d_filho);
});

Você irá criar um botão que, ao ser clicado, faz aparecer esta lista, e também criará um segundo botão que, ao ser clicado, faz com que a lista de cores volte a sumir. */

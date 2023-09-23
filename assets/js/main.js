const docesConteudo = document.querySelector(".doces-conteudo");
const carregando = document.querySelector("#carregando");
const navBar = document.querySelector(".nav-bar");
(async function getDoces() {
  const response = await fetch("docesDestaque.json");
  const docesDestaque = await response.json();
  carregando.style.display = "none";

  for (let doce of docesDestaque) {
    const doceAtual = criaDoceCard(doce.title, doce.image);
    docesConteudo.appendChild(doceAtual);
  }
})();

function criaDoceCard(nome, urlImagem) {
  const doceCard = document.createElement("div");
  doceCard.className = "doce-card";

  const img = document.createElement("img");
  img.src = urlImagem;

  const p = document.createElement("p");
  p.textContent = nome;

  const button = document.createElement("button");
  button.textContent = "Ver mais";
  button.className = "btn";

  doceCard.appendChild(img);
  doceCard.appendChild(p);
  doceCard.appendChild(button);

  return doceCard;
}

function exibeMenu() {
  navBar.style.display = "flex";
}

function fechaMenu() {
  navBar.style.display = "none";
}

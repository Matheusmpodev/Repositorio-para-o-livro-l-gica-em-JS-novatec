const frm = document.querySelector("form");
const resp1 = document.getElementById("resp1");
const resp2 = document.getElementById("resp2");

frm.pontosAprovacao = Number(prompt("qual o número de acertos para aprovação"));
frm.candidatos = [];
frm.btListar = document.getElementById("btListar");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inNome = document.getElementById("inCandidato");
  const inAcertos = document.getElementById("inAcertos");
  const candidato = inNome.value.trim(); //remove os espaços em branco do texto
  const acertos = Number(inAcertos.value);

  if (candidato === "" || inAcertos.value.trim() === "" || Number.isNaN(acertos)) {
    alert("Não foi possível adicioná-los");
    return;
  }

  frm.candidatos.push({ candidato, acertos });
  frm.btListar.dispatchEvent(new Event("click"));

  inNome.value = "";
  inAcertos.value = "";
  inNome.focus();
});

frm.btListar.addEventListener("click", (e) => {
  const copia = [...frm.candidatos];

  if (copia.length === 0) {
    resp1.innerText = "Nenhum candidato cadastrado.";
    return;
  }

  let lista = "";
  copia.forEach((item, index) => { //percorre cada elemento do array copia, item é um objeto do tipo {candidato, acertos}, index é a posição do item no array começando em [0]
    lista += `${index + 1}. ${item.candidato} - ${item.acertos} acertos\n`;
  });

  resp1.innerText = lista;
  resp2.innerText = "";
});

document.getElementById("btAprovados2").addEventListener("click", () => {
  const aprovados = frm.candidatos.filter((item) => item.acertos > frm.pontosAprovacao);

  if (aprovados.length === 0) {
    resp1.innerText = "Nenhum candidato aprovado.";
    resp2.innerText = "";
    return;
  }

  let listaAprovados = "";
  aprovados.forEach((item, index) => {
    listaAprovados += `${index + 1}. ${item.candidato} - ${item.acertos} acertos\n`;
  });

  resp1.innerText = listaAprovados;
  resp2.innerText = "";
});
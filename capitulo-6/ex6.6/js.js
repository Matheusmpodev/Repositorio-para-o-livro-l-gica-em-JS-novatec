const frm = document.querySelector("form");
const inNumber = document.getElementById("inNumber");
const resp1 = document.getElementById("resp1");
const resp2 = document.getElementById("resp2");
const btnVerificar = document.getElementById("btnVerificar");

const numeros = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(inNumber.value);
  if (inNumber.value.trim() === "" || Number.isNaN(valor)) {
    alert("Digite um número válido.");
    inNumber.value = "";
    inNumber.focus();
    return;
  }

  if (numeros.includes(valor)) {
    alert("Número duplicado não permitido.");
    inNumber.value = "";
    inNumber.focus();
    return;
  }

  numeros.push(valor);
  resp1.textContent = `Números: ${numeros.join(", ")}`;
  resp2.textContent = "";
  inNumber.value = "";
  inNumber.focus();
});

btnVerificar.addEventListener("click", () => {
  if (numeros.length === 0) {
    resp2.textContent = "Atenção, números não estão em ordem";
    return;
  }

  const emOrdem = numeros.every((valor, indice) => { // a const emOrdem recebe o resultado verdadeiro ou falso do teste, numeros.every que vai fazer o teste chamando a função para cada item do array numeros, a função recebe o valor e o indice, e se indice === 0 || valor > numeros[indice - 1] o return vai retornar verdadeiro que vai ser o valor do emOrdem
    return indice === 0 || valor > numeros[indice - 1];
  });

  resp2.textContent = emOrdem
    ? "Parabéns, números em ordem"
    : "Atenção, números não estão em ordem";
});
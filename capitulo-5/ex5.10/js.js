const frm = document.querySelector("form")
const resp1 = document.querySelector("#divisores")
const resp2 = document.querySelector("#resposta")

frm.addEventListener("submit", (e) => {   
    e.preventDefault()
  const numero = Number(frm.num.value)

  
  let divisores = "Divisores do " + numero + ": 1"
  let soma = 1


  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      divisores = divisores + ", " + i 
      soma = soma + i
    }
  }
  divisores = divisores + " (Soma: " + soma + ")"

  
  resp1.innerText = divisores

  
  if (numero == soma) {
    resp2.innerText = `${numero} É um Número Perfeito`
  } else {
    resp2.innerText = `${numero} Não É um Número Perfeito`
  }
});

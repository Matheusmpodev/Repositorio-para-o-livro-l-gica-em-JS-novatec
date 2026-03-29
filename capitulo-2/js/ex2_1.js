let frm = document.querySelector("form"); //cria referencia ao form e ao h3
let resp = document.querySelector("h3");

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
resp.innerText = " "
frm.addEventListener("submit", (e) => {
    const nome = frm.inome.value //obtém o nome(proprieda) digitado no form
    resp.innerText = `Olá ${nome}` //exibe a resposta do programa
    e.preventDefault() //evita envio do form
})
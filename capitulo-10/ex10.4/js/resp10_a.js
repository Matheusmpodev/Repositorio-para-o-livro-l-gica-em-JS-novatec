const frm = document.querySelector("form")
const dvIdade = document.querySelector("#divIdade")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const idade = Number(frm.inIdade.value)
    const strIdade = idade.toString()

    for(const num of strIdade) //pra cada string cria um elemento imagem, a origem da imagem vai ser a imagem com o numero digitado.jpg, coloca texto alt e dps adiciona a imagem com o appendChild
        {
            const img = document.createElement("img")
            img.src = `img/{num}.jpg`
            img.alt = `Vela de {num} anos`
            dvIdade.appendChild(img)
        }
        btExibir.disabled = true //desabilita botão envio dps de usar
})

frm.addEventListener("reset", () => { //clicou em limpar recarrega a página
    location.reload()
})
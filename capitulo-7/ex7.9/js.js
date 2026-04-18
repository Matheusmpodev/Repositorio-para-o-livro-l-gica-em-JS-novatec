const frm = document.querySelector("form")
const resp = document.querySelector("h3")

document.getElementById("outCriptografar").addEventListener("click", () => {
    let mensagem = frm.inMensagem.value.trim()
    
    if (mensagem === "") { //verifica se o usuário nn digitou nada
        resp.textContent = "Por favor, digite uma mensagem primeiro!"
        return
    }

    let letrasPares = ""
    let letrasImpares = ""

    for (let i = 0; i < mensagem.length; i++) {
        if (i % 2 === 0) {
            letrasPares += mensagem[i]
        } else {
            letrasImpares += mensagem[i]
        }
    } // i vai percorrer todas as posições do mensagem.length, se a posição for par a var para letras pares recebe a mensagem na posição par mensagem[i = par] se for posição impar a var letraImpares recebe a mensagem posição impar mensagem[i = impar]

    // Junta ÍMPARES + PARES (ordem invertida)
    let criptografada = letrasImpares + letrasPares

    // Adiciona espaço nas últimas 4 letras
    if (criptografada.length > 4) {
        criptografada = criptografada.slice(0, -4) + " " + criptografada.slice(-4)
    }

    resp.textContent = `Criptografada: ${criptografada}`
})
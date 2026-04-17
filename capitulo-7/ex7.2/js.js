const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const fruta = frm.inFruta.value.toUpperCase() //o conteúdo do campo vira todo maiúsculo
    let resposta = ""

    for (const letra of fruta) //passa por todos os caracteres ("letra") da palavra ("fruta")
        {
            if (letra == fruta.charAt(0)) /* quer dizer: quer dizer:

"Se o caractere atual (letra) for igual ao primeiro caractere da palavra..."
O que isso faz na prática
Quando o laço estiver na primeira letra, normalmente a condição será true, porque é o mesmo caractere que charAt(0) retorna.
Se a mesma letra aparecer de novo mais adiante na palavra, também será true.
Para outras letras diferentes do primeiro caractere, será false.
Exemplo
Para fruta = "ABACATE":

letra = "A" → true
letra = "B" → false
letra = "A" → true
letra = "C" → false
e assim por diante...
Uso comum
            */
                {
                    resposta += fruta.charAt(0)
                } else 
                    {
                        resposta += "_"
                    }
        }
        resp.innerText = resposta
        frm.inFruta.value = "*".repeat(fruta.length)
})
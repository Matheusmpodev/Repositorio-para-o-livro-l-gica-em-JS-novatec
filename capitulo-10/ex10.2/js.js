const frm = document.querySelector("form")
const dvMoedas = document.querySelector("#divMoedas")

window.addEventListener("load", () => {
    const num1_00 = Math.ceil(Math.random() * 5) // gera números aleatórios entre 1 e 5 para cada moeda
    const num0_50 = Math.ceil(Math.random() * 5)
    const num0_25 = Math.ceil(Math.random() * 5)
    const num0_10 = Math.ceil(Math.random() * 5)

    const alt1_00 = "Moedas de um real" //textos alternativos
    const alt0_50 = "Moedas de Cinquenta Centavos"
    const alt0_25 = "Moedas de Vinte e cinco centavos"
    const alt0_10 = "Moedas de Dez Centavos"

    criarMoedas(num1_00, "1_00.jpg", alt1_00,
    "moeda1-00") //chama métodod criarMoedas passando os argumentos
    criarMoedas(num0_50, "0_50.jpg", alt0_50, "moeda0-50")
    criarMoedas(num0_25, "0_25.jpg", alt0_25, "moeda0-25")
    criarMoedas(num0_10, "0_10.jpg", alt0_10, "moeda0-10")
})

const criarMoedas = (num, moeda, textoAlt, classe) =>
{
    for (let i = 1; i <= num; i++) //cria laço de repetição para inserir várias imagens de moedas na página
        {
            const novaMoeda = document.createElement("img") //cria elemento img
            novaMoeda.src = "ex10_2.jpg/" + moeda //atributo src
            novaMoeda.alt = textoAlt //texto alternativo
            novaMoeda.className = classe  //classe da moeda(css)
            dvMoedas.appendChild(novaMoeda) //hierarquia DOM
        }

    const br = document.createElement("br") //cria quebra de linha br
    dvMoedas.appendChild(br)
}

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const soma = Number(frm.inSoma.value)  //valor que o ususário informa
    const moedas = dvMoedas.querySelectorAll("img") //obtem img filhas de dvMoedas
    let totalMoedas = 0 //declara e inicializa acumulador

    for (const moeda of moedas)  //percorre as tags img (em moedas) e verifica a propriedade className 
        {
            if (moeda.className == "moeda1-00") {
                totalMoedas += 1 //acumula 1 (p/moedas de 1)
            } else if (moeda.className == "moeda0-50") 
                {
                    totalMoedas += 0.5 //acumula 0.5 (p/moedas de 0.5)
                } else if (moeda.className == "moeda0-25") 
                    {
                        totalMoedas += 0.25 //acumula 0.25 (p/moedas de 0.25)
                    } else if (moeda.className == "moeda0-10") 
                        {
                            totalMoedas += 0.1 //acumula 0.1 (p/moedas de 0.1)
                        }
        }

        const div = document.createElement("div") //cria div
        const h3 = document.createElement("h3") //cria h3

        let mensagem
        const totalFormatado = Number(totalMoedas.toFixed(2)) //botar pra Number

        if (soma === totalFormatado) //verifica se o valor informado é igual ao total de moedas exibidas
            {
                div.className = "alert alert-success" //define a classe da div
                mensagem = "parabéns!! você acertou!" //mensagem de exibição
            } else //mesma coisa so q pra errado
                {
                    div.className = "alert alert-danger"
                    mensagem = `ops... A resposta correta é ${totalFormatado.toFixed(2)}`
                }

        const texto = document.createTextNode(mensagem) //cria elemento de texto
        h3.appendChild(texto)
        div.appendChild(h3) // h3 é filho de div criada na function
        dvMoedas.appendChild(div)

        frm.querySelector("input[type=submit]").disabled = true //desabilita botão (resposta ja foi exibida)
})

frm.addEventListener("reset", () => {
    window.location.reload() //botão reset(exibir novas moedas)
})
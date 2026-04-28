const verApostaExiste = (peso) => 
    {
        if (localStorage.getItem("melanciaPeso")) //recuperar string
            {
                const pesos = localStorage.getItem("melanciaPeso").split(";") // divide a string em array 
                return pesos.includes(peso.toString()) //verifica se o peso (convertido para string) está incluído com includes(). Retorna true se duplicado, false
            } else 
                {
                    return false
                }
    }

    const mostrarApostas = () => 
        {
            if (!localStorage.getItem("melanciaNome")) 
                {
                    respLista.innerText = ""
                    return
                }
                const nomes = localStorage.getItem("melanciaNome").split(";")
                const pesos = localStorage.getItem("melanciaPeso").split(";")

                let linhas = ""

                for (let i = 0; i < nomes.length; i++) 
                    {
                        linhas += nomes[i] + " - " + pesos[i] + "gr \n"
                    }

                    respLista.innerText = linhas
        }
        window.addEventListener("load", mostrarApostas)

const frm = document.querySelector("form")
const respLista = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const peso = Number(frm.inPeso.value)

    if (verApostaExiste(peso)) 
        {
            alert("alguém já apostou este peso, informe outro...")
            frm.inPeso.focus()
            return
        }

        if (localStorage.getItem("melanciaNome")) //Verifica se já há apostas salvas. Se sim, adiciona novos dados aos existentes; se não, cria os dados pela primeira vez, ex "joão".
        {
            const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome //recupera a string ex joão, adiciona um separador ";" e add o novo nome "João;Maria"
            const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso
            localStorage.setItem("melanciaNome" , melanciaNome) //substitui valores antigos pelos novos
            localStorage.setItem("melanciaPeso", melanciaPeso)
        } else 
            {
                localStorage.setItem("melanciaNome", nome)
                localStorage.setItem("melanciaPeso", peso)
            }
        mostrarApostas() //exibe lista atualizada
        frm.reset() //limpa campus
        frm.inNome.focus() //foca no campo
})

frm.btVencedor.addEventListener("click", () => {
    if (!localStorage.getItem("melanciaNome")) 
    {
        alert("Não há apostas cadastradas")
        return
    }

    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"))

    if (pesoCorreto == 0 || isNaN(pesoCorreto)) 
        {
            return
        }

    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    let vencedorNome = nomes[0]
    let vencedorPeso = Number(pesos[0])

    for (let i = 1; i < nomes.length; i++) 
        {
            const difVencedor = Math.abs(vencedorPeso - pesoCorreto)
            const difAposta = Math.abs(Number(pesos[i] - pesoCorreto))

            if (difAposta < difVencedor) 
                {
                    vencedorNome = nomes[i]
                    vencedorPeso = Number(pesos[i])
                }
        }

        let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr"
        mensagem += "/n -----------------------------------------"
        mensagem += "\nVencedor: " + vencedorNome
        mensagem += "\nAposta: " + vencedorPeso + "gr"
        alert(mensagem)
})


frm.btLimpar.addEventListener("click", () => {
    if (confirm("Confirma exclusão de todas as apostas?")) 
        {
            localStorage.removeItem("melanciaNome")
            localStorage.removeItem("melanciaPeso")
            mostrarApostas()
        }
})
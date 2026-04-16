const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const jogos = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    jogos.push({nome})
    frm.reset()
    frm.inNome.focus()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if (jogos.length == 0)
    {
        alert("não há clube")
        return
    }
    let lista = ""
    for (const jogo of jogos)
    {
        const {nome} = jogo
        lista += `time: ${nome}\n `
    }
    resp.innerText = lista
})

frm.btTabela.addEventListener("click", () => {
    if (jogos.length == 0)
    {
        alert("não há clube") //verificação se existe clubes
        return
    }

    const nomes = jogos.map(jogo => jogo.nome) // cria lista só com nomes
    let tabela = ""
    let i = 0
    let j = nomes.length - 1

    while (i < j) {
        tabela += `${nomes[i]} X ${nomes[j]}\n`
        i++
        j--
    }

    if (i === j) {
        tabela += `${nomes[i]} folga`
    }

    resp.innerText = tabela
})
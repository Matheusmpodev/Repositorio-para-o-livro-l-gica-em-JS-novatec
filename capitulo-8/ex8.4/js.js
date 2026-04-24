const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const itens = []

frm.rbPizza.addEventListener("click", () => {
    frm.inBebida.className = "oculta"
    frm.inPizza.className = "exibe"
})
frm.rbBebida.addEventListener("click", () => {
    frm.inPizza.className = "oculta"
    frm.inBebida.className = "exibe"
})

frm.inDetalhes.addEventListener("focus", () => {
    if (frm.rbPizza.checked)
        {
            const pizza = frm.inPizza.value
            const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4
            frm.inDetalhes.placeholder = `Até ${num} sabores`
        }
})

frm.inDetalhes.addEventListener("blur", () => {
    frm.inDetalhes.placeholder = ""
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let produto
    if (frm.rbPizza.checked) 
        {
            const num = frm.inPizza.selectedIndex //obtem o n° do item selecionado
            produto = frm.inPizza.options[num].text //texto do item selecionado
        } else 
            {
                const num = frm.inBebida.selectedIndex
                produto = frm.inBebida.options[num].text
            }
    const detalhes = frm.inDetalhes.value
    itens.push(produto + " (" + detalhes + ")" ) // adiciona ao vetorc
    resp.innerText = itens.join("\n")

    frm.reset()
    frm.rbPizza.dispatchEvent(new Event("click")) //dispara click em rbPizza
})
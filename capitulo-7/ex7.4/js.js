const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inFuncionario.value.trim() //nome recebe o que foi digitado no input retirando os espaços em brancos 

    if (!nome.includes(" ")) 
        {
            alert("informe o nome completo")
            return
        }

    const priEspaco = nome.indexOf(" ")
    const ultEspaco = nome.lastIndexOf(" ")
    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco)

    resp.innerText = `Crachá: ${cracha}`
})
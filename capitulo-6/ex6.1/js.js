const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.paciente.value
    pacientes.push(nome)
    let lista = ""

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`
    }
    respLista.innerText = lista
    frm.paciente.value = ""
    frm.paciente.focus = ""
})

frm.urgencia.addEventListener("click", () => {
    if (!frm.checkValidity()) {
        alert("informe o nome do paciente a ser atendido em caráter de urgência")
        frm.paciente.focus()
        return
    }
    const nome = frm.paciente.value
    pacientes.unshift(nome)
    let lista = ""
    
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
    frm.paciente.value = ""
    frm.paciente.focus()
})

frm.atender.addEventListener("click", () => {
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera")
        frm.paciente.focus()
        return
    }
    const atender = pacientes.shift()
    respNome.innerText = atender
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
})
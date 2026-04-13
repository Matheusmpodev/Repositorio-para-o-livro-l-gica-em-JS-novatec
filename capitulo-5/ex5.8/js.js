const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let resposta = ""
    const fruta = frm.fruta.value
    const num = Number(frm.num.value)

    for (let i = 0; i < num; i++) {
        resposta += fruta + " * "
    }
    resp.innerText = `${resposta}`
})
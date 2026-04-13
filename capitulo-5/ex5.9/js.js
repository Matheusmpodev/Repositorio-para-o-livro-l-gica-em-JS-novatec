const frm = document.querySelector("form")
const resp = document.querySelector("#texto")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let num1 = Number(frm.chinchilas.value)
    let num2 = Number(frm.anos.value)
    let resposta = ""
    for (let i = 1; i <= num2; i++) {
        if (i > 1) {
            num1 = num1 * 3
        }
        resposta = resposta + i + "°" + " Ano: " + num1 + " chinchilas" + "\n"
    }
    resp.innerText = resposta
})
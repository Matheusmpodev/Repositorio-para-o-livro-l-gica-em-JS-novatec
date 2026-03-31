const frm = document.querySelector("form")
const med = document.querySelector("#outmed")
const prec = document.querySelector("#outpromo")

frm.addEventListener("submit", (e) => {
    let medicamento = (frm.inMed.value)
    let preco = Number(frm.inPreco.value)
    let valor = Math.floor(preco * 2)

    med.innerText = `promoção ${medicamento}`
    prec.innerText = `leve 2 por apenas R$: ${valor}`

    e.preventDefault()
})
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    let v15min = Number(frm.inMinuto.value)
    let tUso = Number(frm.inUso.value)

    let valor_pagar = Math.ceil(tUso/15) * v15min

    resp.innerText = `Valor a pagar R$: ${valor_pagar}`

    e.preventDefault()
})
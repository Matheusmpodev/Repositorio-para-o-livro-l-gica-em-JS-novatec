const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const pQuilo = Number(frm.inQuilo.value);
    const consumo = Number(frm.inConsumo.value);
    let valor = (pQuilo/1000)*consumo

    resp.innerText = `o valor a ser pago será: ${valor.toFixed(2)}`
    
    e.preventDefault()
})
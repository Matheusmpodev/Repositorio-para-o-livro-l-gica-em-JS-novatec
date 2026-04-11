const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const horaBrasil = Number(frm.txt1.value)
    let horaFraca = horaBrasil + 5
    if (horaFraca > 24) {
        horaFraca = horaFraca - 24
    }
    resp.innerText = `Hora na frança ${horaFraca.toFixed(2)}`
})
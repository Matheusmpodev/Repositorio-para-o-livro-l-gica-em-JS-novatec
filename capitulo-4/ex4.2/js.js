const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.txt1.value
    const masculino = frm.txt2.value
    const altura = parseFloat(frm.txt4.value (",", "."))
    let peso
    if (masculino) {
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    resp.innerText = `${nome}: Seupeso ideal é ${peso.toFixed(3)}Kg`
})
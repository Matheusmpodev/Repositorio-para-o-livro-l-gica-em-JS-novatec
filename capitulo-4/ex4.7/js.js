const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

const resul = Number(frm.txt1.value)
const resul1 = resul % 2 == 0 ? "par" : "impar"
resp.innerText = `o número é ${resul1}`
})
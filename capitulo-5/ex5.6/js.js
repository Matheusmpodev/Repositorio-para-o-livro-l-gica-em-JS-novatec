const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.inNum.value)
    let numDivisores = 0
    /* forma menos desempenho:
     for (let i = 1; i <= num; i++){
        if(num % i == 0) {
            numDivisores ++
        }
    }
    if (numDivisores == 2) {
        resp.innerText = `${num} é primo`
    } else {
        resp.innerText = `${num} não é primo`
    } */

    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
        numDivisores = 1
        break
        }
    }
    if (num > 1 && !numDivisores) {
        resp.innerText = `${num} é primo`
    } else {
        resp.innerText = `${num} não é primo`
    }
})
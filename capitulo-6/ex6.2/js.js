const frm = document.querySelector("form")
const respErros = document.querySelector("#erros")
const respChances = document.querySelector("#chances")
const respDica = document.querySelector("#dica")

const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1
const CHANCES = 6

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.number.value)

    if (numero == sorteado) {
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`
        frm.subm.disabled = true
        frm.novo.className = "exibe"
    } else {
        if(erros.includes(numero)) {
            alert(`você ja apostou esse número ${numero}. tente outro...`)
        } else {
            erros.push(numero)
            const numErros = erros.length
            const numChances = CHANCES - numErros
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if (numChances == 0) {
                alert("Suas chances acabaram")
                frm.subm.disabled = true
                frm.novo.className = "exibe"
                respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`
            } else {
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.number.value = ""
    frm.number.focus()
})

frm.novo.addEventListener("click", () => {
    location.reload();
});
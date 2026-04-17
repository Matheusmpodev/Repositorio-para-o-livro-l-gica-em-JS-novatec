const anoAtual = new Date().getFullYear()
const idade = prompt(`Quantos anos você comemora em ${anoAtual}?`)
const anoNasc = anoAtual - idade
alert(`Ah... então você nasceu em ${anoNasc}`)
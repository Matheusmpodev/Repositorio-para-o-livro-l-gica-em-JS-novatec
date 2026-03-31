const frm = document.querySelector("form")
const promo = document.querySelector("h3#outpromo")
const prod = document.querySelector("h3#outproduto")

frm.addEventListener("submit", (e) => {
    const produto = (frm.inProd.value)
    const preco = Number(frm.inPreco.value)
    
    let prod_3 = preco * 0.5

    let preco_promo = (preco * 3) - prod_3

    promo.innerText = `${produto} - Promoção: leve 3 por R$ ${preco_promo}`

    prod.innerText = `O 3° produto custa apenas R$ ${prod_3}`
    
    e.preventDefault()
})
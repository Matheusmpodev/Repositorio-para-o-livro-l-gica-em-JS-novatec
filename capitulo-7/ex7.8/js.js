const frm = document.querySelector("form")
const resp = document.querySelector("h3")

const TAXA_MULTA = 2 / 100 // multa fixa de 2% e taxa juro diária em 0,33%
const TAXA_JUROS = 0.33 / 100

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const dataVenc = frm.inDataVenc.value //recebe a data dd/mm/aaaa
    const valor = Number(frm.inValor.value)
    const hoje = new Date() // data e horas atuais e a data e hora do vencimento
    const vencto = new Date()

    const partes = dataVenc.split("-") /*separa a data por dia, mes e ano permitindo modificação em cada uma partes[0] = "2026" → ano
    partes[1] = "04" → mês
    partes[2] = "18" → dia*/

    vencto.setDate(Number(partes[2])) //converter pra número para fazer cálculo
    vencto.setMonth(Number(partes[1]) - 1) /* os mes em js vai de 0-11 Por isso, se o texto diz "04" (abril), o valor correto para setMonth é:
    Number(partes[1]) - 1
    Porque:
    Number("04") = 4
    4 - 1 = 3
    E 3 é abril no objeto Date */
    vencto.setFullYear(Number(partes[0]))

    const atraso = hoje - vencto // se hoje for maior q vencto ent passou da data de vencimento, ou seja, multa
    let multa = 0 // começa com 0 pra caso a data nn de atraso
    let juros = 0

    if (atraso > 0) 
        {
            const dias = atraso / 86400000 // converte milissegundos em dias
            multa = valor * TAXA_MULTA // calcula os 2% e os juros diarios
            juros = valor * TAXA_JUROS * dias
        }

        const total = valor + multa + juros // valor original mais a multa

        frm.outMulta.value = multa.toFixed(2)
        frm.outJuros.value = juros.toFixed(2)
        frm.outTotal.value = total.toFixed(2)
})
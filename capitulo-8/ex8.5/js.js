function categorizarAluno(idade_aluno) 
    {
        if (idade_aluno <= 12) 
            {
                return "infantil";
            } 
        
        if (idade_aluno >= 13 && idade_aluno <= 18) 
            {
                return "juvenil";
            } 
        
        return "Adulto";
                
}

function retornarTracos(nome1) 
    {
    let traco = ""
        for (i = 0; i < nome1.length; i++) 
            {
                if (nome1[i] !== " ") 
                    {
                        traco += "-"
                    }
                else
                    {
                        traco += " "
                    }
            }
        return traco
    }

const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome1 = frm.inNome.value
    const nome = nome1.trim()
    const idade = Number(frm.inIdade.value)
    
    if (!nome.includes(" ")) 
        {
            alert("escreva um nome válido")
        }
    if (idade == 0 || idade == "") 
        {
            alert("escreva um número válido")
        }
    let classificação = categorizarAluno(idade)
    let tracos = retornarTracos(nome)
    resp.innerText = `${nome}\n${tracos}\n${classificação}`
})
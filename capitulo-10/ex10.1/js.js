const frm = document.querySelector("form")
const dvQuadro = document.querySelector("#divQuadro")
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const tarefa = frm.inTarefa.value
    const h5 = document.createElement("h5") // cria elemento no html, o h5
    const texto = document.createTextNode(tarefa)
    h5.appendChild(texto) // texto se torna filho de h5
    dvQuadro.appendChild(h5) // h5 se torna filho de dvQuadro

    frm.inTarefa.value = ""
    frm.inTarefa.focus()
})


frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5") //obtem tags h5 da página

    if (tarefas.length == 0) 
        {
            alert("não há tarefas para selecionar")
            return
        }

    let aux = -1 // variavel auxiliar para indicar linha selecionada

    for (let i = 0; i < tarefas.length; i++) //percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
        {
            if (tarefas[i].className == "tarefa-selecionada") 
                {
                    tarefas[i].className = "tarefa-normal" //troca para normal
                    aux = i //muda valor da variavel auxiliar
                    break
                }
        }

        if (aux == tarefas.length - 1) // se a linha que está selecionada é a ultima, irá voltar para a primeira
            {
                aux = -1
            }

        tarefas[aux + 1].className = "tarefa-selecionada" // muda estilo da próxima linha
})

frm.rbRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")

    let aux = -1

    tarefas.forEach((tarefa, i) => { //percorre a lista de tarefas inseridas na página (elemento h5)
        if (tarefa.className == "tarefa-selecionada") //se é da classe selecionada
            {
                aux = i //muda valor aux
            }
    })

    if (aux == -1) 
        {
            alert("selecione uma tarefa para removê-la...")
            return
        }
    
    if (confirm(`Confirma exclusão de "${tarefas[aux].innerText}"?`)) //solicita confirmação pra excluir
        {
            dvQuadro.removeChild(tarefas[aux]) //remove um dos filhos do divQuadro
        }
})

frm.btGravar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")

    if (tarefas.length == 0) 
        {
            alert("Não há tarefas para serem salvas")
            return
        }

    let dados = "" // ele que vai "acumular" os dados a serem salvos
    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";" //acumula o conteudo de cada h5 que ele passou usando forEach, + ";"
    })

    localStorage.setItem("tarefasDia", dados.slice(0, -1)) //grava os dados no localStorage removendo o ultimo ";"
    if (localStorage.getItem("tarefasDia")) //confere se os dados foram salvos
        {
            alert("Ok! Tarefas Salvas")
        }
})

window.addEventListener("load", () => {
    if (localStorage.getItem("tarefasDia")) //verifica se a tarefas salvas no localStorage
        {
            const dados = localStorage.getItem("tarefasDia").split(";") //cria vetor com a lista de tarefas separadas pelo split(";")
        

            dados.forEach(dado => { //percorre os dados
            const h5 = document.createElement("h5") //cria o elemento no html
            const texto = document.createTextNode(dado) //cria o texto
            h5.appendChild(texto) //define quem é filho de quem
            dvQuadro.appendChild(h5)
            })
        }
})
//FIM código até o momento
const dvTitulo = document.getElementById("divTitulo");
const imClube = document.getElementById("imgClube"); //seleciona os elementos HTML com id pra manipular suas classes, fontes e atributos


const trocarClube = () => 
    {
        const clubes = ["Brasil", "Pelotas", "Farroupilha"] //array

        let selecao //armazena índice de rádio selecionado
        for (let i = 0; i < inRadios.length; i++) 
            {
                if (inRadios[i].checked) 
                    {
                        selecao = i
                        break
                    }
            } // esse for pervorre todos os radios e verifica qual está marcado(checked) ai define selecao com o indice(onde o nome marcado se encontra na array [0], [1], [2] etc...)
        if (selecao <= 2) //valida os clubes, se for algum de 0 ao 2 ta certo
            {
                dvTitulo.className = `row cores-${clubes[selecao]}`
                imClube.src = `img/${clubes[selecao].toLowerCase()}.png`
                imClube.className = "img-fluid"
                imClube.alt = `Símbolo do ${clubes[selecao]}`
                localStorage.setItem("clube", clubes[selecao])          
            } else 
                {
                    dvTitulo.className = "row"
                    imClube.className = "d-none"
                    imClube.alt = ""
                    localStorage.removeItem("clube")
                }
    }

const inRadios = document.querySelectorAll("input")
for (const inRadio of inRadios) 
    {
        inRadio.addEventListener("change", trocarClube)
    }

    const verificarClube = () => 
        {
            if (localStorage.getItem("clube")) 
                {
                    const clube = localStorage.getItem("clube")
                    if (clube == "Brasil") 
                        {
                            inRadios[0].checked = true
                        } else if (clube == "Pelotas") 
                            {
                                inRadios[1].checked = true
                            } else 
                                {
                                    inRadios[2].checked = true
                                }
                                trocarClube()
                }
        }

    window.addEventListener("load", verificarClube)
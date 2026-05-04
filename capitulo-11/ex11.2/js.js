const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

const POLTRONAS = 240; //numero de poltronas do teatro
const reservadas = [];

window.addEventListener("load", () => { //confere se a dados salvos no localStorage, faz um split e adiciona os dados ao array se ouver, se não, inicializa o array //roda após a pag carregar
    const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : [];

    for (let i = 1; i <= POLTRONAS; i++) 
        {
            const figure = document.createElement("figure"); //cria tags figure e img
            const imgStatus = document.createElement("img");

            imgStatus.src = ocupadas.includes(i.toString()) ? "imagens/ocupada.jpg" : "imagens/disponivel.jpg"; //se a posição ta ocupada então aparece imagem ocupada se não disponivel

            imgStatus.className = "poltrona"; //classe com dimensão da img
            const figureCap = document.createElement("figcaption");

            const zeros = i < 10 ? "00" : i < 100 ? "0" : "";

            const num = document.createTextNode(`[${zeros}${i}]`);

            figureCap.appendChild(num); //define os pais de cada tag
            figure.appendChild(imgStatus);
            figure.appendChild(figureCap);

            if (i % 24 == 12) figure.style.marginRight = "60px"; //se o modulo então é o corredor: define margen direita de "60px"

            dvPalco.appendChild(figure);

            (i % 24 == 0) &&  dvPalco.appendChild(document.createElement("br")); // o comando após && será executado e insere quebra de linha        
        }
})

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const poltrona = Number(frm.inPoltrona.value); //obtem conteudo digitado

    if (poltrona > POLTRONAS) //valida o que foi digitado, se nn ultrapassa POLTRONAS
        {
            alert("Informe um número de Poltrona válido");
            frm.inPoltrona.focus();
            return;
        }

    const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : []; //confere se há dados salvos no localStorage, faz um split e adiciona os dados ao array se ouver, se não, inicializa o array vazio

    if (ocupadas.includes(poltrona.toString())) //se poltrona escolhida ja está ocupada
        {
            alert(`Poltrona ${poltrona} já está ocupada...`);
            frm.inPoltrona.value = "";
            frm.inPoltrona.focus();
            return;
        }

        const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona - 1]; //captura imagem da poltrona,filha de divPalco. É -1 pois começa em 0

        imgPoltrona.src = "imagens/reservada.jpg"; //modifica atributo da imagem

        reservadas.push(poltrona); //adiciona poltrona ao vetor reservadas

        frm.inPoltrona.value = "";
        frm.inPoltrona.focus();
});

frm.btConfirmar.addEventListener("click", () => {
    if (reservadas.length == 0) 
        {
            alert("Não há poltronas reservadas");
            frm.inPoltrona.focus();
            return;
        }

        const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : []; //confere se há dados salvos no localStorage, faz um split e adiciona os dados ao array se ouver, se não, inicializa o array vazio

        for (let i = reservadas.length - 1; i >= 0; i--) // for que vai descrescendo a medida que que as reservas vão sendo removidas a cada alteração da imagem
            {
                ocupadas.push(reservadas[i]);

                const imgPoltrona = dvPalco.querySelectorAll("img")[reservadas[i] - 1]; //captura imagem da poltrona,filha de divPalco. É -1 pois começa em 0

                imgPoltrona.src = "imagens/ocupada.jpg";

                reservadas.pop(); //remove do vetor a reserva já alterada
            }

            localStorage.setItem("teatroOcupadas", ocupadas.join(";"));
});




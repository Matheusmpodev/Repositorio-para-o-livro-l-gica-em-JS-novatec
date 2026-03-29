let forma = document.querySelector("form");
let resp1 = document.querySelector("h3");
let resp2 = document.querySelector("h4");

forma.addEventListener("submit", (e) => {
    let tit = forma.txt1.value;
    let dura = Number(forma.txt2.value);

    let horas = Math.floor(dura / 60);
    let minutos = dura % 60;

    resp1.innerText = tit
    resp2.innerText = `${horas} horas e ${minutos} minutos de filme`

    e.preventDefault()
})
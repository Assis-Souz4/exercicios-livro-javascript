//criando referencia aos elementos form, h3, h4(resposta)
const formulario = document.querySelector("form");
const respH3 = document.querySelector("h3");
const respH4 = document.querySelector("h4");

// criando um ouvinte de elemento acionado pelo botão submit
formulario.addEventListener("submit", (e) => {
    // obtendo os conteudos dos campos
    const nomeFilme = formulario.inTitulo.value;
    const duracaoFilme = Number(formulario.inDuracao.value);

    const horas = Math.floor(duracaoFilme / 60);
    const minutos = duracaoFilme % 60;

    respH3.innerText = nomeFilme;
    respH4.innerText = `${horas} hora(s) e ${minutos} minuto(s)`
    // evita o envio do formulario
    e.preventDefault();
})
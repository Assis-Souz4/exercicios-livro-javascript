// criando uma referencia ao form e ao elemento h3(onde sera exibida a resposta)
const formulario = document.querySelector("form");
const resposta = document.querySelector("h3");

// criando um "ouvinte" de evento, acionado pelo botão submit
formulario.addEventListener("submit", (e) => {
    const nome = formulario.inNome;//obtem o nome digitado no form
    resposta.innrText = `Olá ${nome}`;//"Olá" + nome exibe a resposta
    e.preventDefault()//evia envio do formulario
})
const formRestaurante = document.querySelector("form");
const respH3 = document.querySelector("h3");

formRestaurante.addEventListener("submit", (e) => {
    const quilo = Number(formRestaurante.inPrecoQuilo.value);
    const consumo = Number(formRestaurante.inConsumoCliente.value);

    const valor = (quilo / 1000) * consumo;//converter quilo para grama quilo / 1000
    respH3.innerText = `Valor a ser pago R$: ${valor.toFixed(2)}`;

    e.preventDefault();
});
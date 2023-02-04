const formRevenda = document.querySelector("form");
const respNomeVeiculo = document.querySelector(".nomeVeiculo");
const respValorEntrada = document.querySelector(".valorEntrada");
const respParcelas = document.querySelector(".parcelas");

formRevenda.addEventListener("submit", (e) => {
    const veiculo = formRevenda.inVeiculo.value;
    const preco = Number(formRevenda.inPreco.value);

    const entrada = preco * 0.50;//calc valor da entrada ,50% do veiculo
    const valorParcela = (preco * 0.50) / 12;//calc da parcela baseado no valor restante do veiculo
    
    // mostrar as respostas
    respNomeVeiculo.innerText = `Promoção: ${veiculo}`;
    respValorEntrada.innerText = `Entrada de: R$ ${entrada.toFixed(2)}`;
    respParcelas.innerText = `12 x R$ ${valorParcela.toFixed(2)}`;
    // evita o envio do formulario
    e.preventDefault();
});
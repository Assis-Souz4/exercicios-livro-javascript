const formFarmacia = document.querySelector("form");
const outMostrarProduto = document.querySelector("mostrarProduto");
const outMostrarPromocao = document.querySelector("mostrarPromocao");

formFarmacia.addEventListener("submit", (e) => {
    const inProduto = formFarmacia.produto.value;
    const inValorProduto = Number(formFarmacia.inValorProduto.value);

     inValorProduto = Math.abs(inValorProduto);

     outMostrarPromocao.innerText = inValorProduto - Math.floor(inValorProduto);

     e.defaultPrevented();
});
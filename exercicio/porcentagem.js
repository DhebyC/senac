// correção-10
let valorProduto = parseFloat(prompt("Digite o valor do produto:"));
let desconto = valorProduto * 0.07;
let valorFinal = valorProduto - desconto;
alert("Valor com Desconto: R$ " + valorFinal.toFixed(2));
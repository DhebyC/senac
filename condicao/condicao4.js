let vendas = parseFloat(prompt("Digite seu número de vendas"));
let comissao;
if (vendas >= 100000){
    comissao = vendas*0.04;
} else {
    comissao = vendas*0.02;
} alert("O valor da comissão é: R$" +comissao.toFixed(2));
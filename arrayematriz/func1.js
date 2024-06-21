//funçao para somar dois numeros
let valor1 = parseInt(prompt("valor 1"));
let valor2 = parseInt(prompt("valor 2"));
let x =somar(valor1,valor2);
document.write(x);
function somar(a,b){
    let soma = a + b;
    return soma;
}
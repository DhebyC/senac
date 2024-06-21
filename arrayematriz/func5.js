let valor = parseInt(prompt("Digite de 0 a 10"));
let x = testarNumero(valor);
document.write(x);
function testarNumero(a){
    while (a<0 || a>10){
    a =parseInt(prompt("Digite de 0 a 10"));
}
return a;
}
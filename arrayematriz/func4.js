let valor1 = parseInt(prompt("digite o numero"));
let x = testarTipo(valor1);
document.write(x);
function testarTipo(a){
    let tipo;
    if (a % 2 == 0){
        tipo = "par"
    } else {
        tipo = "impar";
    }
    return tipo;
}
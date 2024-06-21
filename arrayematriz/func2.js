/*let valor1 = parseInt(prompt("Valor 1"));
let valor2 = parseInt(prompt("Valor 2"));
let maior = num(valor1,valor2);
document.write (maior);
function num (a,b){
    if (a > b){
        document.write ("O maior é " + a);
    } else if (b>a){
        document.write("O maior é " + b);
    }
    return maior
}*/
// correçao
let valor1 = parseInt(prompt("Valor 1"));
let valor2 = parseInt(prompt("Valor 2"));
let x = maior(valor1,valor2);
document.write(x);
function maior(a,b){
    let maior;
    if (a>b){
        maior = a;
    } else if (b>a){
        maior = b;
    }else (maior = "numeros iguais");
    return maior;
}
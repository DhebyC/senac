let valor1 = parseInt(prompt("Valor 1"));
let valor2 = parseInt(prompt("Valor 2"));
let valor3 = parseInt(prompt("valor 3"));
let x = maior(valor1,valor2,valor3);
let y = menor(valor1,valor2,valor3);
document.write("O maior valor é " + x + " O menor valor é " + y);
function maior(a,b,c){
    let maior;
    if (a>b && a>c){
        maior = a;
    } else if (b>a && b>c){
        maior = b;
    } else if(c>a && c>b){
        maior = c;
    }
    else (maior = "numeros iguais");
    return maior;
}
function menor(a,b,c){
    let menor;
    if (a<b && a<c){
        menor = a;
    } else if (b<a && b<c){
        menor = b;
    } else if (c<a && c<b){
        menor = c;
    } else (menor = "numeros iguais");
    return menor;
}
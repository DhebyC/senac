let soma = 0;
let num = parseInt(prompt("Informe o número: "));
for (let x=num; x<= num + 10; x++){
    if (x % 2 == 0){
        soma += x;
    }
}
document.write("A soma dos números pares é: " +soma);

let valor; 
let qtd =0;
for (let x = 0; x < 10; x++){
    valor = parseInt(prompt("valor"));
    if (valor>5){
        qtd++;
    }
}
document.write("número maiores que 5: " + qtd);
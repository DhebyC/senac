/* 6
let carros = ["Fiat","Volvo","BMW","Maverick"];
document.write(carros[3]);*/
/*let nome = [];
for (let i=0; i<5; i++){
    nome[i] = prompt("Informe o nome");
} 
for (let i=0; i<5; i++){
    document.write(nome[i]+"<br>");
} */
let nome = [];
for (let i=0; i<5; i++){
    nome[i] = prompt("Informe o nome");
} 
let indice = parseInt(prompt("informe o indice"));
while (indice<5){
    alert(nome[indice]);
    indice = parseInt(prompt("informe o indice"));
}
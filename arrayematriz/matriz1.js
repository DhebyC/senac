/*let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];*/
/*let matriz = nem Array(3);
matriz [0] = [1,2,3];
matriz [1] = [4,5,6];
matriz [3] = [7,8,9];
console.log(matriz[1][1]);*/
/* let matriz = nem Array(3);
matriz [0] = [1,2,3];
matriz [1] = [4,5,6];
matriz [3] = [7,8,9];
matriz[1][1] = 12;
console.log("O novo valor é: " + matriz[1][1]);*/
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
for (let lin=0; lin < 3; lin++){
    for (let col=0; col<3; col++){
        document.write(matriz[lin][col]);
        document.write("<br>");
    }
}

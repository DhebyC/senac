/*let matriz = [
    [1,2,3],
    [4,5,6],
]
matriz[0][0] = 7;
matriz[0][1] = 3;
matriz[0][2] = 5;
matriz[1][0] = 7;
matriz[1][1] = 9;
matriz[1][2] = 4;
document.write("O novo valor é: " + matriz[1][0]);*/
//correcao
let matriz = [
    [10,20,30],
    [40,50,60],
];

for (let lin=0; lin < 3; lin++){
    for (let col=0; col<3; col++){
       console.log(matriz[lin][col]);
    }
}
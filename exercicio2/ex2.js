let idade=0;
let sexo;
let qtdh = 0;
let qtdm =0;
for ( let x = 0; x <10; x++){
    idade = parseInt(prompt ("Informe a idade: "));
    sexo = prompt("Informe o sexo (m/h): ").toLowerCase();
    if (sexo == "m"){
        qtdm+=idade;
    } else if  (sexo=="h"){
        qtdh+=idade;
    } else {alert("sexo inavalido");}
}
document.write("soma feminina: "+qtdm);
document.write("Soma masculina: "+qtdh);
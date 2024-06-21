let nome, setor;
let qtd =1, qtd_adm = 0, qtd_log = 0, qtd_inf = 0;
let func = parseInt(prompt("Informe a qtd de func"));
while(qtd<=func){
    nome = prompt("Informe o nome");
    setor= prompt("Informe o setor").toLowerCase();
    if (setor == "adm"){
        qtd_adm++;
    } else if (setor == "log"){
        qtd_log++;
    } else if (setor == "inf"){
        qtd_inf++;
    } else{ alert("setor ivalido");}
    qtd++;
}
document.write("Adm= " + qtd_adm + "Log= " + qtd_log + "Inf= " + qtd_inf);
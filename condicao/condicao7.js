let nota = parseFloat(prompt("Digite a nota:"));
if ((nota < 0) || (nota >10)){
    alert("Nota Inválida");
} else if ((nota >= 0) && (nota < 4)){
    alert("aluno reprovado");
} else if ((nota >= 4) && (nota < 7)){
    nota = parseFloat(prompt("Nota da recuperação"));
    if (nota<5){
        alert("Aluno em Recuperação");
    } else {
        alert("Aprovado na Recuperação");
    }
    
} else {
    alert("Aluno Aprovado");
}

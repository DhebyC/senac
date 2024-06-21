let nota = parseFloat(prompt("Digite a nota:"));
if ((nota < 0) || (nota >10)){
    alert("Nota Inválida");
} else if ((nota >= 0) && (nota < 4)){
    alert("aluno reprovado");
} else if ((nota >= 4) && (nota < 7)){
    alert("Aluno em Recuperação");
} else {
    alert("Aluno Aprovado");
}
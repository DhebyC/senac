let idade = parseInt(prompt("Digite a idade:"));
if (idade >= 18){
    alert("Eleitor obrigatório");
} else if (idade >= 16){
    alert("Eleitor opcional");
} else {
    alert("Não é eleitor");
}